import Link from "next/link";

export default function notFound() {
  return (
    <div
      className="h-screen bg-cover bg-top sm:bg-top flex items-center justify-center relative"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 z-20 text-common-wht ">
        <h1 className="mt-2 text-4xl font-extrabold  tracking-tight sm:text-5xl">
          404 Error
        </h1>
        <p className="mt-2 text-lg font-medium text-opacity-50">
          It looks like the page you’re looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link href="/">
            <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
              Go back home
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-main-main" />
    </div>
  );
}
