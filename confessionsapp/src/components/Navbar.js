// navbar.js
// @client
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo"; // refer to Logo.js

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Characters",
    },
    {
      id: 2,
      link: "Post",
    },
    {
      id: 3,
      link: "Login",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-neutral-400 fixed nav">
      {/* includes logo */}
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
          <Logo/>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map( ({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-black duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ) )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map( ({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ) ) }
        </ul>
      )}
    </div>
  );
};

export default Navbar;