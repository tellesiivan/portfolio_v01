import Link from "next/link";

export default function Button({ text, type, styles, icon, link }) {
  return (
    <Link href={link}>
      <a
        className={` ${
          type === "fill" ? "bg-common-btnFill" : "border border-main-darkLight"
        } rounded-md ${
          styles ?? ""
        } px-8 text-sm py-2 flex items-center justify-center link font-Karla hover:bg-main-alt hover:text-text-dark `}
      >
        {icon ?? ""} {text}
      </a>
    </Link>
  );
}
