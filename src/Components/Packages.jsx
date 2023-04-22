import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PackageRef } from "./Context/refSlice";

export default function Packages() {
  const pref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PackageRef(pref));
  }, []);

  return (
    <div
      ref={pref}
      className="  bg-bgShade h-auto text-white pt-11 flex justify-center flex-wrap"
    >
      <div className="w-96 border-2 p-4 m-4">
        <h1 className="text-white font-semibold text-xl text-center p-4">
          Coatching Packages
        </h1>

        <div>
          <h2 className="text-white font-semibold text-lg text-center bg-slate-600">
            Live Coatching
          </h2>
          <p className="my-2">You will get 1 Hour live coaching session</p>

          <div className="border border-white p-2">
            <h3 className="font-semibold text-mainellow">
              What else to expect?
            </h3>
            <ol>
              <li>How to climb</li>
              <li>Items/Runes choices</li>
              <li>Macro/Micro tips</li>
              <li>Champion pool</li>
              <li>Vision control</li>
              <li>And also answering your questions</li>
            </ol>
          </div>
          <h3 className="font-black text-center text-2xl my-4">Price $40</h3>
          <button className="bg-mainellow p-2 text-lg sm:p-4 sm:text-xl font-semibold text-bgShade m-auto block">
            Book Now
          </button>
        </div>
      </div>
      <div className="w-96 border-2 p-4 m-4">
        <h1 className="text-white font-semibold text-xl text-center p-4">
          Coatching Packages
        </h1>

        <div>
          <h2 className="text-white font-semibold text-lg text-center bg-slate-600">
            Live Team Coatching
          </h2>
          <p className="my-2">You will get 1 Hour live coaching session</p>

          <div className="border border-white p-2">
            <h3 className="font-semibold text-mainellow">
              What else to expect?
            </h3>
            <ol>
              <li>How to climb</li>
              <li>Items/Runes choices</li>
              <li>Macro/Micro tips</li>
              <li>Champion pool</li>
              <li>Vision control</li>
              <li>Teach pro team strategise</li>
              <li>And also answering your questions</li>
            </ol>
          </div>
          <h3 className="font-black text-center text-2xl my-4">Price $60</h3>
          <button className="bg-mainellow p-2 text-lg sm:p-4 sm:text-xl font-semibold text-bgShade m-auto block">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
