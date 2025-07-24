import React from "react";
import LeftSidebar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="Home flex justify-between max-w-7xl w-[90%] mx-auto">
      <LeftSidebar />
      <Feed />
      <RightSideBar />
    </div>
  );
};

export default Home;
