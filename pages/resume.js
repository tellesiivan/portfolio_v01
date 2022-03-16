import React from "react";
import Typist from "react-text-typist";

export default function Resume() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <Typist
          sentences={["Email me or download my resume", "</ thank you >"]}
          loop={false}
          className="text-xl text-text-white text-semibold"
          cursorColor="gold"
          cursorSmooth={true}
          typingSpeed={90}
        />
        <div></div>
      </div>
    </div>
  );
}
