import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
        <Link
          key={i}
          href="/dua/id"
          className="col-span-1 p-4 bg-white flex rounded-lg shadow-sm"
        >
          <div
            className={`flex w-16 p-4 flex-shrink-0 items-center justify-center rounded-l-md text-xl bg-gray-50 font-medium text-gray-600`}
          >
            <Skeleton width={16} height={16} />
          </div>
          <div className="flex flex-1 flex-col justify-between truncate rounded-r-md border-gray-200 bg-white">
            <div className="flex-1 px-4 py-2 text-sm 2xl:text-lg  overflow-hidden">
              <p className="text-gray-600 whitespace-pre-wrap">
                <Skeleton count={3} />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default loading;
