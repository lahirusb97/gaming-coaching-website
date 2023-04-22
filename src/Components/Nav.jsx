import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function () {
  const count = useSelector((state) => state.refC.homeRef);
  const about = useSelector((state) => state.refC.aboutRef);
  const packages = useSelector((state) => state.refC.PackageRef);
  const contactr = useSelector((state) => state.refC.ContactRef);

  const dispatch = useDispatch();
  const refnav = useRef(null);

  return (
    <div ref={refnav}>
      <div className="flex justify-center items-center h-16">
        <button className="text-white ml-3">Home</button>

        <button
          onClick={() => {
            packages.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-white ml-3"
        >
          Coatching
        </button>

        <button
          onClick={() => {
            about.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-white ml-3"
        >
          About
        </button>

        <button
          onClick={() => {
            contactr.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-white ml-3"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
