import React, { useEffect, useState } from "react";
import mainVId from "../assets/lol.mp4";
import { useRef } from "react";
import Nav from "./Nav";
import bronz from "../assets/ranks/Bronze.png";
import challenger from "../assets/ranks/Challenger.png";
import diamond from "../assets/ranks/Diamond.png";
import Gold from "../assets/ranks/Gold.png";
import Grandmaster from "../assets/ranks/Grandmaster.png";
import iron from "../assets/ranks/Iron.png";
import Master from "../assets/ranks/Master.png";
import Platinum from "../assets/ranks/Platinum.png";
import Silver from "../assets/ranks/Silver.png";
import { motion } from "framer-motion";
import SmokeElement from "smoke-effect-react";
import { useSelector } from "react-redux";
import useWindowDimensions from "./getWindowDimensions";
export default function Home() {
  const x = useRef(null);
  const count = useSelector((state) => state.refC.PackageRef);

  const imgArray = [
    iron,
    bronz,
    Gold,
    Platinum,
    diamond,
    Master,
    Grandmaster,
    challenger,
  ];
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImg((currentImg + 1) % imgArray.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImg]);
  const { height, width } = useWindowDimensions();

  return (
    <div ref={x}>
      <div className="w-full h-screen relative">
        <div className=" w-full absolute top-0 left-0 z-40 h-16  inset-0 bg-bgShade shadow-lg ">
          <Nav />
        </div>
        <video
          className="w-full h-full object-cover"
          src={mainVId}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-bgShade opacity-95"></div>
        <div className="text-center absolute inset-0 flex items-center justify-center flex-col">
          <motion.img
            id="herorank"
            className="w-80 animate-bounce" //
            src={imgArray[currentImg]}
          />

          <h1 className="text-white text-3xl sm:text-6xl font-bold ">
            Bring Your Skills To Next Level
          </h1>
          <h2 className="text-white text-1xl m-4">
            Ready to escape your elo? Book a session now with a Challenger
            coach.
          </h2>
          <button
            onClick={() => {
              count.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="bg-mainellow p-2 text-lg sm:p-4 sm:text-xl font-semibold "
          >
            Book Now
          </button>
        </div>
      </div>
      {window.pageYOffset > height ? (
        <button
          onClick={() => {
            x.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className=" fixed bottom-10 right-5 text-white p-4 bg-red-500 "
        >
          Up
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
