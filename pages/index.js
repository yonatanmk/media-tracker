import React from "react";
import axios from "axios";
import moment from "moment";

import styles from "./index.module.scss";
import Timeline from "../components/Timeline";
import { getDurationDays, getDateString } from "../utils/media";
import { capitalize } from "../utils";

const Home = ({ media }) => {
  const mappedMedia = media.map((item) => {
    const sortedMappedNodes = !item.nodes
      ? []
      : item.nodes
          .map((node) => ({
            ...node,
            startTime: new Date(node.startTime),
            endTime: node.endTime ? new Date(node.endTime) : new Date(),
          }))
          .sort((a, b) => (a.startTime > b.startTime ? 1 : -1));

    // if (item.id === 38) {
    //   debugger;
    // }
    return {
      ...item,
      startTime: item.startTime
        ? new Date(item.startTime)
        : sortedMappedNodes[0].startTime,
      endTime: sortedMappedNodes[0]
        ? sortedMappedNodes[sortedMappedNodes.length - 1].endTime
        : !item.startTime
        ? null
        : item.endTime
        ? new Date(item.endTime)
        : new Date(),
      inProgress: !item.nodes && !item.endTime,
      nodes: sortedMappedNodes,
    };
  });

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

  const link = sortedMedia.find((item) => item.id === 38);
  console.log(link);

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <table className={styles.sideTable}>
          {sortedMedia.map((item) => {
            // if (item.id === 38) {
            //   // console.log(item);
            // }
            // console.log(item);
            return (
              <tr key={item.id}>
                <td style={{ width: "12rem" }}>{item.name}</td>
                <td>{capitalize(item.type)}</td>
                <td>{getDateString(item.startTime)}</td>
                <td>
                  {item.inProgress ? "Today" : getDateString(item.endTime)}
                </td>
                <td>{getDurationDays(item) + " days"}</td>
              </tr>
            );
          })}
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
