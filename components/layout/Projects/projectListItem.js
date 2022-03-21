import { CalendarIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Link from "next/link";

export default function ProjectListItem({ position }) {
  const slugURL = position.title.split(" ").join("-").toLowerCase();

  function bgColor(color) {
    if (color === "Active") {
      return "bg-status-active";
    } else if (color === "Pending") {
      return "bg-status-pending";
    }
    return "bg-status-inactive";
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <li key={position.id}>
        <Link
          href={{
            pathname: "/projects/[slug]",
            query: {
              slug: `${slugURL}`,
              id: position.id,
              status: position.status.toLowerCase(),
            },
          }}
          passHref
        >
          <a className="block mb-3 rounded-md bg-main-darkLight">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium truncate text-text-main">
                  {position.title}
                </p>
                <div className="flex items-center flex-shrink-0 ml-1">
                  <div
                    className={`w-2 h-2 rounded-full ${bgColor(
                      position.status
                    )}`}
                  ></div>
                  <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    {position.status}
                  </p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex flex-wrap">
                  {position.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 mt-2 mr-1 text-xs rounded-full md:mt-0 bg-main-nav text-text-main"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="flex items-center mt-2 text-sm text-text-grey sm:mt-0">
                  <CalendarIcon
                    className="flex-shrink-0 mr-1.5 h-4 w-4 text-text-grey"
                    aria-hidden="true"
                  />
                  <p className="text-xs">{position.fromTo}</p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
}
