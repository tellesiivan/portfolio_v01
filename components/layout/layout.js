import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
