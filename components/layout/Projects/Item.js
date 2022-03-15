import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

export default function Item({position}) {
  return (
    <li key={position.id}>
      <a href="#" className="block mb-3 rounded-md bg-main-darkLight">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium truncate text-text-main">
              {position.title}
            </p>
            <div className="flex flex-shrink-0 ml-2">
              <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                {position.type}
              </p>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-text-grey">
                <UsersIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-text-grey"
                  aria-hidden="true"
                />
                {position.department}
              </p>
              <p className="flex items-center mt-2 text-sm text-text-grey sm:mt-0 sm:ml-6">
                <LocationMarkerIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-text-grey"
                  aria-hidden="true"
                />
                {position.location}
              </p>
            </div>
            <div className="flex items-center mt-2 text-sm text-text-grey sm:mt-0">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-text-grey"
                aria-hidden="true"
              />
              <p>
                Closing on{" "}
                <time dateTime={position.closeDate}>
                  {position.closeDateFull}
                </time>
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
