import React from "react";

export default function TopBottom({ styles, leftC, rightC }) {
  const css = `flex flex-col text-main-alt md:mx-4 ${styles ?? ""}`;

  return (
    <div className={css}>
      <div className="flex items-center w-full h-full p-3">{leftC}</div>
      <div className="flex items-center justify-center w-full px-3">
        {rightC}
      </div>
    </div>
  );
}
