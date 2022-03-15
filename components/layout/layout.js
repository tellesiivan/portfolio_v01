import React from "react";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row w-full">
      <TopNav />
      <main className="w-full">{children}</main>
    </div>
  );
}
