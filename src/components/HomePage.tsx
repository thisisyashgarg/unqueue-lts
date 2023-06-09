import logo from "../images/homepage.svg";
import React, { useEffect } from "react";
import ButtonCTA from "./ButtonCTA";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { getNameFromUID } from "../data/findNameFromUID";

export default function HomePage() {
  // const user = signInUserWithEmailPass("yg@yg.com", "qwertyui");
  // console.log(user);

  useEffect(() => {
    localStorage.removeItem("domainName");
  }, []);

  return (
    <div className="flex flex-col items-center p-10 ">
      <Heading heading="What is UnQueue?" />
      <img src={logo} className="pt-16" />

      <ul className="space-y-2 text-2xl p-16 font-semibold">
        <li> • Eliminate physical queues</li>
        <li> • Join virtual queues from your device</li>
        <li> • Receive turn notifications</li>
        <li> • Convenient and efficient</li>
      </ul>

      <Link to="/domains">
        <ButtonCTA text="Get Started" />
      </Link>
    </div>
  );
}
