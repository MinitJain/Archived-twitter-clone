import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex  p-4 border-b border-gray-200">
          <Avatar src="" name="User Name" size="40" />
          <div className="ml-2 w-full">
            <div className="flex items-center ml-2">
              <h1 className="font-semibold">Alex</h1>
              <p className="text-gray-500 text-sm  ml-2"> @IamAlex123</p>
            </div>
            <div>
              <p className="text-gray-700 text-sm">
                This is a sample tweet content. It can be a short message or a
                longer post depending on the user's thoughts.
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex items-center group">
                <div className="rounded-full cursor-pointer p-2 transition-all hover:bg-blue-100 active:scale-95">
                  <FaRegComment
                    size={"18px"}
                    className="group-hover:text-blue-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm ml-1 group-hover:text-blue-500">12</p>
              </div>
              <div className="flex items-center group">
                <div className="cursor-pointer p-2 rounded-full transition-all hover:bg-red-100 active:scale-95">
                  <FcLike size={"20px"} className="group-hover:scale-110" />
                </div>
                <p className="text-sm ml-1 group-hover:text-red-500">12</p>
              </div>
              <div className="flex items-center group">
                <div className="rounded-full cursor-pointer p-2 transition-all hover:bg-green-100 active:scale-95">
                  <CiBookmark
                    size={"20px"}
                    className="group-hover:text-green-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm ml-1 group-hover:text-green-500">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
