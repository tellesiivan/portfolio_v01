import React from "react";

import { SiJavascript, SiReact } from "react-icons/si";
import ProjectList from "./ProjectList";

export default function ProjectPage() {
  return (
    <>
      <div aria-hidden="true" className="relative">
        <img
          src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="object-cover object-top w-full h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-main-main" />
      </div>

      <div className="max-w-screen-lg pb-4 mx-2 mt-10 mb-10 overflow-hidden rounded-lg min-h-fit sm:mx-auto text-common-wht bg-main-accentDark">
        <div className="flex items-center px-3 h-14 bg-main-darkLight">
          <div>
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-indigo-800 rounded-full bg-common-gold link">
              <SiJavascript color={"black"} />
              <span className="pl-4 text-sm text-main-darkLight">
                Vanilla JS
              </span>
            </span>
            <span className="inline-flex items-center px-3 py-1 ml-2 text-sm font-medium text-indigo-800 rounded-full bg-common-blue link">
              <SiReact color={"white"} />
              <span className="pl-4 text-sm text-common-wht">React JS</span>
            </span>
          </div>
        </div>
        <ProjectList />
      </div>
    </>
  );
}
