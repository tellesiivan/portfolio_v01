import React from "react";
import { FaReact } from "react-icons/fa";

export default function Tooltip({ name, icon }) {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-2 mt-2 mr-2 rounded-full md:w-40 link bg-main-darkLight">
      {icon}
      <span className="ml-4 text-sm md:ml-0 text-text-main">{name}</span>
    </div>
  );
}
