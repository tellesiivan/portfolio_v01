import ProjectListItem from "./projectListItem";
import { useEffect, useState } from "react";
import { allProjects, getAllEvents } from "../../../helper/projectUtil";

export default function ProjectList({ projectList }) {
  return (
    <div className="mx-3 mt-4 overflow-hidden">
      <ul role="list">
        {projectList &&
          projectList.map((position) => (
            <ProjectListItem position={position} key={position.id} />
          ))}
      </ul>
    </div>
  );
}
