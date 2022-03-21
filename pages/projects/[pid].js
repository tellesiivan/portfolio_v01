import React from "react";
import Project from "../../components/layout/Projects/Projects/project";
import { allProjects, getSelectedProject } from "../../helper/projectUtil";

export default function ProjectPage({ project }) {
  return (
    <>
      <Project project={project} />
    </>
  );
}

export async function getStaticPaths() {
  const projects = await allProjects();

  const slugs = projects.map((project) =>
    project.title.split(" ").join("-").toLowerCase()
  );

  const all = slugs.map((slug) => ({
    params: {
      pid: slug,
    },
  }));

  return {
    paths: all,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  try {
    const selectedProject = await getSelectedProject(params.pid);

    if (!selectedProject) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        project: selectedProject,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
