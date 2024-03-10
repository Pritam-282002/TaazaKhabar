"use client";
import React, { useState } from "react";
import logo from "../logo.png";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  const [mobile, setmobile] = useState(false);
  const togglenav = () => {
    setmobile(!mobile);
  };
  return (
    <>
      <div className="flex justify-between px-6 py-4 bg-pink-300 items-center">
        <a href="/" className="flex justify-center items-center space-x-1">
          <div className="text-lg font-semibold text-center">
            <span className="text-2xl">T</span>AAZA{" "}
            <span className="text-2xl">K</span>HABAR
          </div>
        </a>
        <div className="md:hidden block" onClick={togglenav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div className="md:block hidden">
          <ul className="flex justify-center space-x-4 capitalize items-center">
            <Link href={"/"}>
              <li>home</li>
            </Link>
            <Link href={"/About"}>
              <li>about us</li>
            </Link>
            <Link href={"/Contact"}>
              <li>contact us</li>
            </Link>
          </ul>
        </div>
      </div>
      {mobile && (
        <div className=" bg-pink-300 capitalize md:hidden ">
          <ul>
            <Link href={"/"}>
              <li className="hover:bg-pink-500 px-2">home</li>
            </Link>
            <Link href={"/About"}>
              <li className="hover:bg-pink-500 px-2">about us</li>
            </Link>
            <Link href={"/Contact"}>
              <li className="hover:bg-pink-500 px-2">contact us</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
