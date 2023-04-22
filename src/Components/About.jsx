import { useRef, useEffect } from "react";
import React from "react";
import player from "../assets/player.png";
import { useSelector, useDispatch } from "react-redux";
import refSlice, { aboutRef } from "./Context/refSlice";

export default function About() {
  const count = useSelector((state) => state.refC.aboutRef);
  const dispatch = useDispatch();
  const refabout = useRef(null);
  useEffect(() => {
    dispatch(aboutRef(refabout));
  }, []);
  return (
    <div ref={refabout} className="bg-bgShade h-auto">
      <h1 className="text-white font-black text-center text-3xl p-8">About</h1>
      <div className=" flex flex-wrap justify-center items-center">
        <img src={player} className="w-96" />

        <div className="w-1/2 md:w-80 lg:w-5/12 xl:w-1/4 text-center md:ml-4">
          <h1 className="text-white font-semibold text-lg my-4">
            Climb the ranking ladder as faster as you can with{" "}
            <span className="text-mainellow font-semibold">
              CHALLANGER COACHI
            </span>
          </h1>
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus illum quisquam in quis veritatis voluptatem
            voluptates, harum praesentium corrupti repudiandae pariatur quod!
            Est ipsam eos nulla error! Magnam, tempora temporibus?
          </p>
        </div>
      </div>
    </div>
  );
}
