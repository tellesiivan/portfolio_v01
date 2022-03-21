import { SiJavascript, SiReact } from "react-icons/si";
import ProjectList from "./ProjectList";

export default function ProjectPage({ projects }) {
  return (
    <>
      <div aria-hidden="true" className="relative">
        <img
          src="./Images/projectImgs/remote-me.jpg"
          alt=""
          className="object-cover object-center w-full h-72 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-main-main" />
      </div>

      <div className="max-w-screen-lg pb-4 mx-2 mt-10 mb-10 overflow-hidden rounded-lg min-h-fit sm:mx-auto text-common-wht bg-main-accentDark">
        <div className="flex items-center px-3 h-14 bg-main-darkLight">
          <div>
            <h2 className="text-sm pl-3">Projects ({projects.length})</h2>
          </div>
        </div>
        <ProjectList projectList={projects} />
      </div>
    </>
  );
}
