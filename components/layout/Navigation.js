import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "AskWes", href: "/askWes" },
  ];

  return (
    <>
      <ul className="flex flex-row justify-around w-full md:w-fit">
        {navItems.map((navItem) => (
          <li
            className={
              currentPath === navItem.href
                ? "bg-common-wht md:mr-4 list-none px-3 py-1 rounded-md text-sm w-1/4 md:w-auto text-center"
                : " md:mr-4 list-none text-text-main px-3 py-1 text-sm w-1/4 md:w-auto text-center"
            }
            key={navItem.name}
          >
            <Link href={navItem.href}>
              <a
                className={
                  navItem.name === "AskWes" && currentPath !== "/askWes"
                    ? "text-status-inactive font-semibold"
                    : ""
                }
              >
                {navItem.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div></div>
    </>
  );
}
