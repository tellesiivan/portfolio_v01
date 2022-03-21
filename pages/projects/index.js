import React from "react";
import ProjectPage from "../../components/layout/Projects";
import { allProjects } from "../../helper/projectUtil";

export default function Projects({ projects }) {
  return (
    <>
      <ProjectPage projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const projects = await allProjects();

  projects;
  return {
    props: {
      projects,
    },
  };
}
