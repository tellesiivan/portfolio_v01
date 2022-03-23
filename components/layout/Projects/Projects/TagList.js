import React from "react";

export default function TagList({ project }) {
  console.log(project);
  return (
    <div className="p-4 text-center bg-main-blk rounded-lg border border-main-accentDark shadow-md sm:p-8 mx-4 sm:mx-8 max-w-3xl lg:max-w-none">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 text-common-wht">
        Built with.
      </h5>
      <p className="mb-3 sm:mb-8 sm:text-sm text-text-main">
        A list of technologies used to develop{" "}
        <span className="text-md font-bold  text-common-wht">
          {project.title ? project.title : "this project"}.
        </span>
      </p>
      <div className="justify-center items-center space-y-4 flex flex-wrap sm:space-y-0 sm:space-x-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 mt-2 mr-1 text-xs rounded-full md:mt-0 bg-main-accentDark text-text-grey"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
