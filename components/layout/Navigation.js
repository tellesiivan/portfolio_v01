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
      <ul className="flex row">
        {navItems.map((navItem) => (
          <li
            className={
              currentPath === navItem.href
                ? "bg-main-alt mr-4 list-none px-3 py-1 rounded-full text-sm"
                : " mr-4 list-none text-text-main px-3 py-1 text-sm"
            }
            key={navItem.name}
          >
            <Link href={navItem.href}>
              <a
                className={
                  navItem.name === "AskWes" && currentPath !== "/askWes"
                    ? "navGradient"
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
