import React from "react";
import { useRouter } from "next/router";
import Project from "../../components/layout/Projects/Projects/project";

export default function ProjectPage() {
  const router = useRouter();
  const { query } = router;

  console.log(query.id, query.slug);
  return (
    <>
      <Project id={query.slug} />
    </>
  );
}
