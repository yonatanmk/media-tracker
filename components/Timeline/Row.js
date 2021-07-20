import React, { useContext } from "react";
import styles from "./Timeline.module.scss";
import { TimelineContext } from "./index";
import { datesEqual } from "../../utils/media";

const Row = ({ media: { id, name, type, startTime, endTime } }) => {
  const { timelineStartTime, timelineEndTime } = useContext(TimelineContext);
  // console.log({
  //   name,
  //   startTime,
  //   endTime,
  //   timelineStartTime,
  //   timelineEndTime,
  // });

  const timelineDuration = timelineEndTime - timelineStartTime;
  const rowDuration = endTime - startTime;
  const percentage = rowDuration / timelineDuration;
  const bufferLength = startTime - timelineStartTime;
  const bufferPercentage = bufferLength / timelineDuration;
  const isSmall = percentage < 0.01 || (percentage < 0.03 && name.length > 15);

  const style = {};
  if (
    percentage < 0.03 &&
    name.length > 10 &&
    datesEqual(endTime, timelineEndTime)
  ) {
    style.fontSize = "0.6rem";
  }
  // } else if (
  //   percentage < 0.05 &&
  //   name.length > 5 &&
  //   endTime.getTime() === timelineEndTime.getTime()
  // ) {
  // style.fontSize = "0.75rem";
  // }

  // if (id === 30) {
  //   console.log({
  //     name,
  //     namelength: name.length,
  //     percentage,
  //     endTime: endTime.getTime(),
  //     timelineEndTime: timelineEndTime.getTime(),
  //     equal: datesEqual(endTime, timelineEndTime),
  //   });
  // }

  return (
    <div className={styles.row}>
      <div
        className={`${styles.row__block} ${styles[`row__block__${type}`]}`}
        style={{
          ...style,
          width: `${percentage * 100}%`,
          marginLeft: `${bufferPercentage * 100}%`,
        }}
      >
        {!isSmall && <p>{name}</p>}
      </div>
      {isSmall && <p style={{ marginLeft: "4px" }}>{name}</p>}
    </div>
  );
};

export default Row;
