import React from "react";
import Avatar from "react-avatar";
import { AiTwotoneLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBookmarks } from "react-icons/io5";

const Tweet = () => {
  return (
    <div>
      <div>
        <div className="flex  p-4 border-b border-gray-300">
          <Avatar src="" name="User Name" size="40" />
          <div className="ml-2">
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
              <div>
                {" "}
                <CiHeart />{" "}
              </div>
              <div>
                <FaComment />{" "}
              </div>
              <div>
                {" "}
                <IoBookmarks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
