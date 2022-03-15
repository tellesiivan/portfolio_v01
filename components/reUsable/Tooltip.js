import Link from "next/link";
import React from "react";

export default function Tooltip({ name, icon, link }) {
  let content = link ? (
    <Link href={link} passHref>
      <div className="flex flex-row items-center justify-between px-4 py-2 mt-2 mr-2 rounded-full md:w-36 link bg-main-accentDark">
        {icon}
        <span className="ml-4 text-sm md:ml-0 text-text-main">{name}</span>
      </div>
    </Link>
  ) : (
    <div className="flex flex-row items-center justify-between px-4 py-2 mt-2 mr-2 rounded-full md:w-40 bg-main-accentDark">
      {icon}
      <span className="ml-4 text-sm md:ml-0 text-text-main">{name}</span>
    </div>
  );
  return content;
}
