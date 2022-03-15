import { useRef, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Workspace() {
  const workspaceRef = useRef();
  const [bodyChanged, setBodyChanged] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 165) {
        // document.body.classList.add("whtBg");
        setBodyChanged(true);
      } else {
        // document.body.classList.remove("whtBg");
        setBodyChanged(false);
      }
    },
    [],
    workspaceRef
  );

  const bgIm = bodyChanged
    ? "bg-[url('https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-bottom	"
    : "bg-[url('https://images.unsplash.com/photo-1616933067642-ac31e646d4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]";

  return (
    <div className={`relative z-10 mb-12 h-1/3 sm:2/4 `} ref={workspaceRef}>
      <div
        className={`absolute  rounded-lg top-20 left-3 -z-40 duration-1000	transition-all  h-96 ${bgIm} bg-cover  ${
          bodyChanged ? "w-11/12  " : " w-8/12"
        }`}
      ></div>

      <div className="m-3 text-right ">
        <p
          className={`text-lg font-semibold ${
            bodyChanged ? "text-common-gold" : "text-common-wht"
          }`}
        >
          a productive
        </p>
        <h1
          className={`sm:-mt-6 text-6xl font-bold sm:text-7xl ${
            bodyChanged ? "text-main-alt" : "text-common-wht"
          }`}
        >
          workspace matters<span className="text-common-gold">.</span>
        </h1>
      </div>
    </div>
  );
}
