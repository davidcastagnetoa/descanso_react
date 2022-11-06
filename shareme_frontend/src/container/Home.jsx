import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/hi";
import { Link, Route, Routes } from "react-router-dom";

import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import { client } from "../client";
import logo from "../assets/logo.png";

const Home = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="flex bg-gray-50 md:flex-grow flex-col h-screen transaction-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(false)}
        />
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link> 
        {/* 1:16:04 */}
      </div>
    </div>
  );
};

export default Home;
