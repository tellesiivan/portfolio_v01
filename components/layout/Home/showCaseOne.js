import { useRef } from "react";
import Tooltip from "../../reUsable/Tooltip";
import {
  SiVisualstudio,
  SiSlack,
  SiPostman,
  SiGithub,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const toolTips = [
  {
    icon: <FaReact color="#1DA1F2" />,
    name: "ReactJS",
    id: 1,
  },
  {
    icon: <SiVisualstudio color="#00A4EF" />,
    name: "VS Code",
    id: 2,
  },
  {
    icon: <SiSlack color="#fff" />,
    name: "Slack",
    id: 3,
  },
  {
    icon: <SiPostman color="#EF5B25" />,
    name: "Postman",
    id: 4,
  },
  {
    icon: <SiGithub color="#fff" />,
    name: "Github",
    id: 5,
  },
  {
    icon: <SiJavascript color="gold" />,
    name: "Javascript",
    id: 6,
  },
  {
    icon: <SiTailwindcss color="#00A4EF" />,
    name: "Tailwind CSS",
    id: 7,
  },
  {
    icon: <SiFirebase color="#F4B400" />,
    name: "Firebase DB",
    id: 8,
  },
  {
    icon: <SiRedux color="#1DA1F2" />,
    name: "Redux",
    id: 9,
  },
];

export default function ShowCaseOne() {
  const containerRef = useRef();

  return (
    <div
      className="h-auto p-4 mx-3 my-16 rounded-lg sm:mb-0 bg-common-blk"
      ref={containerRef}
    >
      <div className="flex flex-col items-end ml-auto text-right w-fit">
        <p className="flex flex-row items-center px-3 py-1 text-sm rounded-md text-text-main bg-main-accentDark w-fit">
          <div className="w-4 h-4 mr-2 rounded-full bg-common-gold"></div> 2021
          — Current
        </p>
        <h1 className="mt-2 text-2xl font-bold text-text-main ">
          Player Boost
        </h1>
      </div>
      <div className="flex flex-col-reverse items-center w-full h-auto my-4 md:flex-row">
        <div className="w-full h-full mt-3 md:mt-0 md:w-6/12 ">
          <div className="pb-3 mt-4 text-lg font-normal sm:text-xl text-text-main font-Karla md:mt-0">
            What we work with.
          </div>
          <div className="flex flex-wrap">
            {toolTips.map((tip) => (
              <Tooltip key={tip.id} name={tip.name} icon={tip.icon} />
            ))}
          </div>
        </div>
        <div className="w-full h-full text-justify md:w-6/12 ">
          <p className="text-md md:pl-4 text-text-grey">
            I was in charge of design “Virtual Retailing” service for
            dealerships, we build several industry breaking features such as
            <span className="text-common-wht"> real-time payments</span> from
            lenders and approval under 90 seconds, trade-in with conditions
            evaluated to the pennies, checkout payments with Stripe integration.
            You can see live product on one of our customer website Nalley BMW
          </p>
        </div>
      </div>
    </div>
  );
}
