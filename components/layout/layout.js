import React from "react";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row w-full">
      <TopNav />
      <main>{children}</main>
    </div>
  );
}
