//This is dummy footer component
export default function Footer({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <a
              href="https://github.com/strapi/strapi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <a
              href="https://strapi.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out ml-4"
            >
              Strapi
            </a>
          </div>
          <div className="text-sm text-gray-500 sm:text-center mt-4 sm:mt-0">
            &copy; 2024 XSite
          </div>
        </div>
      </div>
    </footer>
  );
}
