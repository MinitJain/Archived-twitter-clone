import React from "react";
import { RiHome5Line, RiHashtag, RiNotification3Line, RiUser3Line, RiBookmarkLine, RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="w-[20%] ">
      <div>
        <div>
          <img width={"80px"} src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="my-4">
          <Link
            to="/"
            className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
          >
            <RiHome5Line size={24} />
            <div className="font-semibold text-lg ml-2">Home</div>
          </Link>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <RiHashtag size={24} />
            <div className="font-semibold text-lg ml-2">Explore</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <RiNotification3Line size={24} />
            <div className="font-semibold text-lg ml-2">Notification</div>
          </div>
          <Link
            to="/profile"
            className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
          >
            <RiUser3Line size={24} />
            <div className="font-semibold text-lg ml-2">Profile</div>
          </Link>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <RiBookmarkLine size={24} />
            <div className="font-semibold text-lg ml-2">Bookmarks</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <RiLogoutBoxRLine size={24} />
            <div className="font-semibold text-lg ml-2">Logout</div>
          </div>
          <button className="px py-2 font-bold border-none text-md bg-[#1D9BF0] text-white rounded-full w-full mt-4 hover:bg-[#1A8CD8]">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
