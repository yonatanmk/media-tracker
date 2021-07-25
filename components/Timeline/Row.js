import React, { useContext, Fragment } from "react";
import styles from "./Timeline.module.scss";
import { TimelineContext } from "./index";
import { datesEqual } from "../../utils/media";

const Row = ({ media: { _id, name, type, startTime, endTime, nodes } }) => {
  const { timelineStartTime, timelineEndTime, trueEndTime } =
    useContext(TimelineContext);

  const timelineDuration = timelineEndTime - timelineStartTime;

  const getBlock = (startTime, endTime, key) => {
    const rowDuration = endTime - startTime;
    const percentage = rowDuration / timelineDuration;
    const bufferLength = startTime - timelineStartTime;
    const bufferPercentage = bufferLength / timelineDuration;
    const isSmall =
      percentage < 0.013 ||
      (percentage < 0.02 && name.length > 12) ||
      (percentage < 0.025 && name.length > 20) ||
      (percentage < 0.032 && name.length > 25);
    const atEnd = datesEqual(endTime, trueEndTime);

    const style = {};
    if (percentage < 0.02 && name.length > 10 && atEnd) {
      style.fontSize = "0.6rem";
    }
    // } else if (
    //   percentage < 0.05 &&
    //   name.length > 5 &&
    //   endTime.getTime() === timelineEndTime.getTime()
    // ) {
    // style.fontSize = "0.75rem";
    // }

    // if (_id === 7) {
    //   console.log({
    //     name,
    //     namelength: name.length,
    //     percentage,
    //     startTime: startTime,
    //     endTime: endTime,
    //     timelineEndTime: timelineEndTime,
    //     equal: atEnd,
    //   });
    // }

    return (
      <Fragment key={key || _id}>
        <div
          className={`${styles.row__block} ${styles[`row__block__${type}`]}`}
          style={{
            ...style,
            width: `${percentage * 100}%`,
            left: `${bufferPercentage * 100}%`,
          }}
        >
          {(atEnd || !isSmall) && <p>{name}</p>}
        </div>
        {isSmall && !atEnd && (
          <div
            className={styles.row__block__label}
            style={{
              left: `${(bufferPercentage + percentage) * 100}%`,
            }}
          >
            <p>{name}</p>
          </div>
        )}
      </Fragment>
    );
  };

  return (
    <div className={styles.row}>
      {startTime && !nodes[0] && getBlock(startTime, endTime)}
      {nodes &&
        nodes[0] &&
        nodes.map((node, i) =>
          getBlock(node.startTime, node.endTime, `${_id}${i}`)
        )}
    </div>
  );
};

export default Row;
