import React from "react";
import moment from "moment";

import styles from "./Timeline.module.scss";
import TimelineRow from "./TimelineRow";
import { getMonths, getMonthYear } from "../../utils/media";

export const TimelineContext = React.createContext({});

const Timeline = ({ startTime, endTime, children }) => {
  const months = getMonths(startTime, endTime);
  const timelineStartTime = months[0];
  const timelineEndTime = months[months.length - 1];
  const timelineDuration = timelineEndTime - timelineStartTime;
  const monthWidthPercentage =
    timelineDuration / months.length / timelineDuration;

  const title = `${moment(timelineStartTime).format("MMM Do YYYY")} to ${moment(
    timelineEndTime
  ).format("MMM Do YYYY")}`;
  return (
    <TimelineContext.Provider
      value={{
        timelineStartTime,
        timelineEndTime,
        trueEndTime: endTime,
      }}
    >
      <>
        <div className={styles.row__header}>
          <p>{title}</p>
        </div>
        <div className={styles.scrollbox}>
          <div className={styles.timeline}>
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
                    key={i}
                    className={styles.monthLabel}
                    style={{
                      // top: "2rem",
                      bottom: 0,
                      left: `${bufferPercentage * 100}%`,
                      width: `${monthWidthPercentage * 100}%`,
                    }}
                  >
                    <p>{getMonthYear(month)}</p>
                  </div>
                );
              })}
            </div>
            {months.map((month, i) => {
              const bufferLength = month - timelineStartTime;
              const bufferPercentage = bufferLength / timelineDuration;
              return (
                <div
                  key={i}
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
        </div>
      </>
    </TimelineContext.Provider>
  );
};

Timeline.Row = TimelineRow;

export default Timeline;
