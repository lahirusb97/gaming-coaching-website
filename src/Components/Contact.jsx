import { useEffect, useRef } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import refSlice, { contacRef } from "./Context/refSlice";

export default function Contact() {
  const dispatch = useDispatch();
  const refc = useRef(null);
  useEffect(() => {
    dispatch(contacRef(refc));
  }, []);

  return (
    // <div ref={refc} className="bg-bgShade flex justify-center">
    //   <div className=" flex flex-col md:grid grid-cols-2 grid-rows-3">
    //     <label className="text-white block col-start-1 row-start-1 col-end-2 row-end-2  mb-5">
    //       Email
    //       <br></br>
    //       <input className="bg-slate-800 p-2 w-80 h-2/1" />
    //     </label>
    //     <label className="text-white block col-start-1 row-start-2 col-end-3 row-end-2">
    //       Name
    //       <br></br>
    //       <input className="bg-slate-800 p-2 w-80 h-2/1 " />
    //     </label>

    //     <label className="text-white col-start-2 row-start-1 col-end-2 row-end-3 ml-2">
    //       Message
    //       <br></br>
    //       <textarea className="bg-slate-800 p-2 w-80 h-40" />
    //     </label>
    //     <button className="bg-white p-2 text-lg sm:p-4 sm:text-xl font-semibold text-bgShade block row-start-3 row-end-4  mb-4 col-start-1 col-end-2">
    //       Send
    //     </button>
    //   </div>
    // </div>
    <div
      ref={refc}
      className="bg-bgShade flex justify-center flex-col items-center "
    >
      <h1 className="mb-8 text-white font-semibold text-lg">Contact</h1>
      <form
        onSubmit={() => {}}
        className=" flex flex-col md:grid grid-cols-2 grid-rows-2 items-end gap-2"
      >
        <input
          name="user_name"
          placeholder="Name"
          className="bg-white text-black  font-semibold p-4 w-80 h-2/1 col-start-1 col-end-1 row-span-1"
        />

        <input
          name="user_email"
          type="email"
          placeholder="Email"
          className="bg-white text-black font-semibold  p-4 w-80 row-start-2 row-end-2 col-start-1 col-end-1"
        />

        <textarea
          name="message"
          placeholder="Message"
          className="bg-white text-black font-semibold  p-2 w-80 h-full row-start-1 row-end-3 col-start-2 col-end-2"
        />
        <button
          type="submit"
          className="bg-mainellow bg-maineyellow p-2 text-lg sm:p-4 sm:text-xl font-semibold text-bgShade block row-start-3 row-end-4  mb-4 col-start-1 col-end-3"
        >
          Send
        </button>
      </form>
    </div>
  );
}
