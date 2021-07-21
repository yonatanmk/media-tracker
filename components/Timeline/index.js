import React from "react";
import moment from "moment";

import styles from "./Timeline.module.scss";
import Row from "./Row";
import { getMonths, getMonthYear } from "../../utils/media";

export const TimelineContext = React.createContext({});

const Timeline = ({ startTime, endTime, children }) => {
  const title = `${moment(startTime).format("MMM Do YYYY")} to ${moment(
    endTime
  ).format("MMM Do YYYY")}`;

  const months = getMonths(startTime, endTime);
  const timelineStartTime = months[0];
  const timelineEndTime = months[months.length - 1];
  const timelineDuration = timelineEndTime - timelineStartTime;
  const monthWidthPercentage =
    timelineDuration / months.length / timelineDuration;
  console.log(months);
  return (
    <TimelineContext.Provider
      value={{
        timelineStartTime,
        timelineEndTime,
        trueEndTime: endTime,
      }}
    >
      <div className={styles.timeline}>
        <div className={styles.row__header}>
          <p>{title}</p>
        </div>
        {children}
        <div className={styles.row}>
          {months.map((month, i) => {
            const bufferLength = month - timelineStartTime;
            const bufferPercentage = bufferLength / timelineDuration;
            if (month === months[months.length - 1]) {
              return null;
            }
            return (
              <div
                className={styles.monthLabel}
                style={{
                  position: "absolute",
                  // top: "2rem",
                  bottom: 0,
                  left: `${bufferPercentage * 100}%`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "2rem",
                  width: `${monthWidthPercentage * 100}%`,
                }}
              >
                <p>{getMonthYear(month)}</p>
              </div>
            );
          })}
        </div>
        {months.map((month) => {
          const bufferLength = month - timelineStartTime;
          const bufferPercentage = bufferLength / timelineDuration;
          return (
            <div
              className={styles.monthLine}
              style={{
                left: `${bufferPercentage * 100}%`,
              }}
            ></div>
          );
        })}
        {/* <div className={styles.row}>
          <div
            className={`${styles.row__block}`}
            style={{
              ...style,
              width: `${percentage * 100}%`,
              marginLeft: `${bufferPercentage * 100}%`,
            }}
          >
            {(atEnd || !isSmall) && <p>{name}</p>}
          </div>
        </div> */}
      </div>
    </TimelineContext.Provider>
  );
};

Timeline.Row = Row;

export default Timeline;
