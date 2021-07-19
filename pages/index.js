import React from "react";
import axios from "axios";

const Home = ({ media }) => {
  console.log(media);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

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
