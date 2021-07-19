import React from "react";
import axios from "axios";
import moment from "moment";

import styles from "./index.module.scss";
import Timeline from "../components/Timeline";

const Home = ({ media }) => {
  console.log(media);

  // const

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <h1 className={styles.title}>Home</h1>
        {media.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <div className={styles.content}>
        <Timeline startTime={new Date("09/01/2018")} endTime={new Date()}>
          {media.map((item) => (
            <Timeline.Row
              name={item.name}
              startTime={new Date(item.startTime)}
              endTime={new Date(item.endTime)}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
};
// "06/2018"

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/media`
  );

  // console.log("response");
  // console.log(response.data);

  return {
    props: {
      media: response?.data,
    },
  };
}

export default Home;
