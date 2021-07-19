import React, { useContext } from "react";
import styles from "./Timeline.module.scss";
import { TimelineContext } from "./index";

const Row = ({ name, startTime, endTime }) => {
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
  return (
    <div className={styles.row}>
      <div
        className={styles.row__block}
        style={{
          width: `${percentage * 100}%`,
          marginLeft: `${bufferPercentage * 100}%`,
        }}
      >
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Row;
