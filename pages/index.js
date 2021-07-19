import React from "react";
import axios from "axios";

// import Timeline from "react-calendar-timeline";
// import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

import styles from "./index.module.scss";
import Timeline from "../components/Timeline";

const Home = ({ media }) => {
  console.log(media);
  const groups = [
    { id: 1, title: "group 1" },
    { id: 2, title: "group 2" },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: "DOS2",
      start_time: new Date("05/31/2020"),
      end_time: new Date("10/26/2020"),
    },
    {
      id: 2,
      group: 2,
      title: "Yakuza 6",
      start_time: new Date("12/07/2020"),
      end_time: new Date("01/07/2021"),
    },
    // {
    //   id: 3,
    //   group: 1,
    //   title: "item 3",
    //   start_time: moment(),
    //   end_time: moment(),
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidePanel}>
        <h1 className={styles.title}>Home</h1>
        {media.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <div className={styles.content}>
        {/* <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={new Date("03/2020")}
          defaultTimeEnd={moment()}
        /> */}
        <Timeline startTime={new Date("01/01/2020")} endTime={new Date()}>
          <Timeline.Row
            name="DOS2"
            startTime={new Date("05/31/2020")}
            endTime={new Date("10/26/2020")}
          />
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
