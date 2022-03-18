import React from "react";
import { useRouter } from "next/router";
import Project from "../../components/layout/Projects/Projects/project";
import { allProjects, getSelectedProject } from "../../helper/projectUtil";

export default function ProjectPage({ test }) {
  const router = useRouter();
  console.log(!test ? "loading..." : "project");
  const { query } = router;

  return (
    <>
      <Project id={query.slug} project={test} />
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

  const selectedProject = await getSelectedProject(params.pid);

  return {
    props: {
      test: selectedProject,
    },
  };
}
