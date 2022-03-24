import React from "react";
import Typist from "react-text-typist";
import { BsFilePdf } from "react-icons/bs";

export default function ResumeIndx() {
  return (
    <div className="p-4 bg-main-accentDark rounded-lg  sm:p-6 w-11/12	sm:w-2/6">
      <Typist
        sentences={[
          "Hello, get a copy of my resume right below",
          "My latest web development experience?",
          "Support ReactJS Developer...",
          "Got any questions?",
          "Here is my email: tellezIvan7@gmail.com 🚀  ",
        ]}
        loop={false}
        className="text-sm text-text-grey text-semibold"
        cursorColor="gold"
        cursorSmooth={true}
        typingSpeed={90}
      />
      <ul className="my-4 space-y-3">
        <li>
          <a
            className="flex items-center p-3 bg-main-main rounded-lg "
            href="/files/Resume.pdf"
            target="_blank"
            download
            passHref
          >
            <span className="flex-1 whitespace-nowrap text-common-wht text-sm">
             Download Resume
            </span>
            <span className="inline-flex items-center justify-center pl-1 pr-2 py-0.5 ml-3 text-xs font-medium text-text-grey bg-main-accentDark rounded">
              <span className="mr-2">
                <BsFilePdf />
              </span>{" "}
              PDF
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
