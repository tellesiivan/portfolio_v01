import React from "react";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <main className="w-full">{children}</main>
    </>
  );
}
