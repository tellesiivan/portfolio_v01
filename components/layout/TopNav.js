import Navigation from "./Navigation";

export default function TopNav() {
  return (
    <>
      <header className="fixed z-50 flex items-center h-10 max-w-5xl px-2 mx-auto rounded-full shadow w-w-full top-4 bg-main-nav left-8 right-8 navBlur row ">
        <Navigation />
      </header>
    </>
  );
}
