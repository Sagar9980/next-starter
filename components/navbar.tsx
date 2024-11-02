//This is dummy navbar component
export default function Navbar({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            XSite
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <a
            href="#"
            className="p-1.5 text-sm text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
          >
            Sign up
          </a>
          <a
            href="#"
            className="p-1.5 ml-4 text-sm text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}
