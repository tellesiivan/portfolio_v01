import React from "react";

export default function TwoRow({ styles, leftC, rightC }) {
  const css = `flex flex-col md:flex-row w-full text-main-alt ${
    styles ?? ""
  } font-Karla`;

  return (
    <div className={css}>
      <div className="flex items-center h-full p-3 md:w-1/2">{leftC}</div>
      <div className="flex items-center justify-center md:w-1/2 ">{rightC}</div>
    </div>
  );
}
