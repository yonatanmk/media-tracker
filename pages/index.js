import React from "react";
import axios from "axios";
import moment from "moment";

import styles from "./index.module.scss";
import Timeline from "../components/Timeline";
import { getDurationDays, getDateString } from "../utils/media";
import { capitalize } from "../utils";

const Home = ({ media }) => {
  const mappedMedia = media.map((item) => ({
    ...item,
    startTime: new Date(item.startTime),
    endTime: item.endTime ? new Date(item.endTime) : new Date(),
    inProgress: !item.endTime,
  }));
  console.log(mappedMedia);

  const timelineStartTime = mappedMedia.reduce(
    (acc, item) => (item.startTime < acc ? item.startTime : acc),
    new Date()
  );

  const sortedMedia = [...mappedMedia].sort((a, b) =>
    getDurationDays(a) < getDurationDays(b) ? 1 : -1
  );

  const sortedTimelineMedia = [...mappedMedia].sort((a, b) =>
    a.startTime > b.startTime ? 1 : -1
  );

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <table className={styles.sideTable}>
          {sortedMedia.map((item) => (
            <tr key={item.id}>
              <td style={{ width: "12rem" }}>{item.name}</td>
              <td>{capitalize(item.type)}</td>
              <td>{getDateString(item.startTime)}</td>
              <td>{item.inProgress ? "Today" : getDateString(item.endTime)}</td>
              <td>{getDurationDays(item) + " days"}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className={styles.content}>
        <Timeline startTime={timelineStartTime} endTime={new Date()}>
          {sortedTimelineMedia.map((item) => (
            <Timeline.Row media={item} />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/media`
  );

  return {
    props: {
      media: response?.data,
    },
  };
}

export default Home;
