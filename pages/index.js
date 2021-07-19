import React from "react";
import axios from "axios";
import moment from "moment";

import styles from "./index.module.scss";
import Timeline from "../components/Timeline";

const Home = ({ media }) => {
  const mappedMedia = media.map((item) => ({
    ...item,
    startTime: new Date(item.startTime),
    endTime: new Date(item.endTime),
  }));
  console.log(mappedMedia);

  const timelineStartTime = mappedMedia.reduce(
    (acc, item) => (item.startTime < acc ? item.startTime : acc),
    new Date()
  );

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <h1 className={styles.title}>Home</h1>
        {media.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <div className={styles.content}>
        <Timeline startTime={timelineStartTime} endTime={new Date()}>
          {mappedMedia.map((item) => (
            <Timeline.Row
              name={item.name}
              startTime={item.startTime}
              endTime={item.endTime || new Date()}
            />
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
