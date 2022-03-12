import Navigation from "./Navigation";

export default function TopNav() {
  return (
    <>
      <header className="fixed z-50 flex flex-row items-center h-10 max-w-5xl px-2 mx-auto rounded-lg shadow w-w-full top-4 bg-main-nav left-4 right-4 md:left-8 md:right-8 navBlur items-evenly">
        <Navigation />
      </header>
    </>
  );
}
