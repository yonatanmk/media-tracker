import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

import styles from "./App.module.scss";
import Timeline from "../../components/Timeline";
import { getDurationDays, getDateString } from "../../utils/media";
import { capitalize } from "../../utils";

const App = ({ media }) => {
  const router = useRouter();

  useEffect(async () => {
    const session = await getSession();
    if (!session) {
      router.push("/");
    }
  }, [router]);

  const mappedMedia = media.map((item) => {
    const sortedMappedNodes = (item.nodes || [])
      .map((node) => ({
        ...node,
        startTime: new Date(node.startTime),
        endTime: node.endTime ? new Date(node.endTime) : new Date(),
      }))
      .sort((a, b) => (a.startTime > b.startTime ? 1 : -1));

    const startTime = item.startTime
      ? new Date(item.startTime)
      : sortedMappedNodes[0].startTime;

    const endTime = sortedMappedNodes[0]
      ? sortedMappedNodes[sortedMappedNodes.length - 1].endTime
      : !item.startTime
      ? null
      : item.endTime
      ? new Date(item.endTime)
      : new Date();

    return {
      ...item,
      startTime,
      endTime,
      inProgress: !item.nodes && !item.endTime,
      nodes: sortedMappedNodes,
      duration: sortedMappedNodes[0]
        ? sortedMappedNodes.reduce(
            (acc, node) => acc + getDurationDays(node),
            0
          )
        : getDurationDays({
            startTime,
            endTime,
          }),
    };
  });

  const timelineStartTime = mappedMedia.reduce(
    (acc, item) => (item.startTime < acc ? item.startTime : acc),
    new Date()
  );

  const sortedMedia = [...mappedMedia].sort((a, b) =>
    a.duration < b.duration ? 1 : -1
  );

  const sortedTimelineMedia = [...mappedMedia].sort((a, b) =>
    a.startTime > b.startTime ? 1 : -1
  );

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <table className={styles.sideTable}>
          <tbody>
            {sortedMedia.map((item) => (
              <tr key={item._id}>
                <td style={{ width: "12rem" }}>{item.name}</td>
                <td>{capitalize(item.type)}</td>
                <td>{getDateString(item.startTime)}</td>
                <td>
                  {item.inProgress ? "Today" : getDateString(item.endTime)}
                </td>
                <td>{item.duration + " days"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.content}>
        <Timeline startTime={timelineStartTime} endTime={new Date()}>
          {sortedTimelineMedia.map((item) => (
            <Timeline.Row key={item._id} media={item} />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || !session.user) {
    return {
      props: {
        media: [],
      },
    };
  }

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/media/${session.user.id}`
  );

  return {
    props: {
      session,
      media: response?.data || [],
    },
  };
}

export default App;
