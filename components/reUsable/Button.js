import Link from "next/link";

export default function Button({ text, type, styles, icon, link, target }) {
  const buttonType =
    target === "blank" ? (
      <a
        href={link}
        rel="noreferrer"
        className={` ${
          type === "fill" ? "bg-common-btnFill" : "border border-main-darkLight"
        } rounded-md ${
          styles ?? ""
        } px-8 text-sm py-2 flex items-center justify-center link font-Karla hover:bg-main-alt hover:text-text-dark `}
        target="_blank"
      >
        {icon ?? ""} {text}
      </a>
    ) : (
      <Link href={link}>
        <a
          className={` ${
            type === "fill"
              ? "bg-common-btnFill"
              : "border border-main-darkLight"
          } rounded-md ${
            styles ?? ""
          } px-8 text-sm py-2 flex items-center justify-center link font-Karla hover:bg-main-alt hover:text-text-dark `}
        >
          {icon ?? ""} {text}
        </a>
      </Link>
    );

  return buttonType;
}
