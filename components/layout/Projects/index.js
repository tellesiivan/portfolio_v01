import Image from "next/image";
import Head from "next/head";

import ProjectList from "./ProjectList";

export default function ProjectPage({ projects }) {
  const imgSrc = `/Images/projectsHead.jpg`;

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content={`Showcasing ${
            projects ? projects.length : "available"
          } projects that illustrate details about each project while laying out skills used in each project.`}
        />
      </Head>
      <div aria-hidden="true" className="relative h-72 ">
        <Image
          src={imgSrc}
          alt={`Projects created by Ivan Telles, total of ${projects?.length}`}
          layout="fill"
          className="object-cover object-center w-full h-72 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-main-main" />
      </div>

      <div className="max-w-screen-lg pb-4 mx-2 mt-10 mb-10 overflow-hidden rounded-lg min-h-fit sm:mx-auto text-common-wht bg-main-accentDark">
        <div className="flex items-center px-3 h-14 bg-main-darkLight">
          <div>
            <h2 className="text-sm pl-3">Projects ({projects?.length})</h2>
          </div>
        </div>
        <ProjectList projectList={projects} />
      </div>
    </>
  );
}
