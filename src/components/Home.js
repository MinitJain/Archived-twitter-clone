import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";
import Feed from "./Feed";

const Home = () => {
  return (
    <div>
      <LeftSidebar />
      <Feed />
      <RightSideBar />
    </div>
  );
};

export default Home;
