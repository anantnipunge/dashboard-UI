import React from "react";
import "./rightSidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

function RightSidebar() {
  return (
    <div className="right">
      <div className="top">
        <div className="search">
          <button className="button">
            <i>
              <SearchIcon />
            </i>
            Search...
          </button>
        </div>
        <div className="chat">
          <i>
            <ChatIcon />
          </i>
        </div>
        <div className="chat">
          <i>
            <CircleNotificationsIcon />
          </i>
        </div>
        {/* search */}
        {/* chat */}
        {/* notify */}
      </div>
      {/* Profile */}
      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthNt9gnhm4Rn5JttH5dCxpKZsng9scSziqA&usqp=CAU"
          alt=""
        />
      </div>
      {/* text */}
      <div className="info">
        <div>
          <span className="name">Anant Nipunge</span>
        </div>
        <span className="desc">Web developer</span>
        <div>
          <p>
            Hey I'm a Web Developer. I would like to collaborate with the
            peoples to get more exposure !
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
