import { useRef, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Workspace() {
  const workspaceRef = useRef();
  const [bodyChanged, setBodyChanged] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= 85) {
        document.body.classList.add("whtBg");
        setBodyChanged(true);
      } else {
        document.body.classList.remove("whtBg");
        setBodyChanged(false);
      }
    },
    [],
    workspaceRef
  );
  return (
    <div className="relative z-10 mb-8 overflow-hidden h-96" ref={workspaceRef}>
      <div className="absolute w-8/12 rounded-lg -left-10 -z-50 h-96 bg-[url('https://images.unsplash.com/photo-1616933067921-11096044e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover"></div>
      <div className="m-3 text-right ">
        <p className="text-lg font-semibold text-text-grey">a productive</p>
        <h1
          className={`-mt-1 text-6xl font-bold sm:text-7xl ${
            bodyChanged ? "text-common-blk" : "text-common-wht"
          }`}
        >
          workspace matters<span className="text-main-brightGreen">.</span>
        </h1>
      </div>
    </div>
  );
}
