import React from "react";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row w-full h-screen">
      <TopNav />
      <main className="mx-4 md:mt-14 grow">{children}</main>
    </div>
  );
}
