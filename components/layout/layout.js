import React from "react";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row w-full h-screen">
      <TopNav />
      <main className="mt-10 grow">{children}</main>
    </div>
  );
}
