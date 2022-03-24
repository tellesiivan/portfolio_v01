import Head from "next/head";
import Image from "next/image";
import TagList from "./TagList";
import { FiExternalLink } from "react-icons/fi";

export default function Project({ project }) {
  const imgSrc = `/Images/projectImgs/${project.id}.jpg`;

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.content?.copy.desc} />
      </Head>
      <div aria-hidden="true" className="relative h-96">
        <Image
          src={imgSrc}
          alt={project.title}
          layout="fill"
          className="object-cover object-center w-full h-96 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-main-main" />
      </div>

      <div className="relative px-4 pb-10 mx-auto -mt-12 max-w-7xl sm:pb-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-common-wht sm:text-4xl inline-flex text-center">
            {project.title}{" "}
            <a
              href={project.content.links.website}
              className="ml-3 flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              {}

              <FiExternalLink className="h-5 w-5 hover:text-status-inactive" />
            </a>
          </h2>
          <p className="mt-4 text-text-grey">{project.content?.copy.desc}</p>
        </div>

        <dl className="grid max-w-3xl grid-cols-1 mx-auto mt-16 gap-x-4 gap-y-4 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 ">
          {project.content?.copy.features.map((feature) => (
            <div
              key={feature.name}
              className="bg-main-accentDark px-6 py-8 rounded-md"
            >
              <dt className="font-medium text-common-wht ">{feature.name}</dt>
              <dd className="mt-2 text-sm text-text-grey">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <TagList project={project} />
    </>
  );
}
