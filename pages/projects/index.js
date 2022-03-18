import React from "react";
import ProjectPage from "../../components/layout/Projects";
import { allProjects, getSelectedProject } from "../../helper/projectUtil";

export default function Projects({ test }) {
  const x = getSelectedProject("8jhklwe1");

  return (
    <>
      <ProjectPage projects={test} />
    </>
  );
}

export async function getStaticProps() {
  const projects = await allProjects();

  projects;
  return {
    props: {
      test: projects,
    },
  };
}
