import Link from "next/link";

export default function Button({ text, type, styles, icon, link }) {
  return (
    <Link href={link}>
      <a
        className={` ${
          type === "fill" ? "bg-main-darkLight" : "border border-main-darkLight"
        } rounded-md ${
          styles ?? ""
        } px-16 py-4  md:w-64 md:h-16 flex items-center justify-center link hover:bg-main-alt hover:text-text-dark `}
      >
        {icon ?? ""} {text}
      </a>
    </Link>
  );
}
