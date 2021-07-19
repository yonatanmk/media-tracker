import React from "react";
import moment from "moment";

import styles from "./Timeline.module.scss";
import Row from "./Row";

export const TimelineContext = React.createContext({});

const Timeline = ({ startTime, endTime, children }) => {
  const title = `${moment(startTime).format("MMM Do YYYY")} to ${moment(
    endTime
  ).format("MMM Do YYYY")}`;
  return (
    <TimelineContext.Provider
      value={{ timelineStartTime: startTime, timelineEndTime: endTime }}
    >
      <div className={styles.timeline}>
        <div className={styles.row__header}>
          <p>{title}</p>
        </div>
        {children}
      </div>
    </TimelineContext.Provider>
  );
};

Timeline.Row = Row;

export default Timeline;
