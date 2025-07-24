import React from "react";
import { IoHome } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const LeftSidebar = () => {
  return (
    <div>
      <div>
        <div>
          <img width={"80px"} src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="my-4">
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <IoHome size={"24px"} />
            <div className="font-semibold text-lg ml-2">Home</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <FaHashtag size={"24px"} />
            <div className="font-semibold text-lg ml-2">Explore</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <IoNotifications size={"24px"} />
            <div className="font-semibold text-lg ml-2">Notification</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <FaUser size={"24px"} />
            <div className="font-semibold text-lg ml-2">Profile</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <IoBookmarks size={"24px"} />
            <div className="font-semibold text-lg ml-2">Bookmarks</div>
          </div>
          <div className="SideBar flex items-center my-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
            <FiLogOut size={"24px"} />
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
