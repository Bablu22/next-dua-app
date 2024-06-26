import React from "react";
import Skeleton from "react-loading-skeleton";

const loading = () => {
  return (
    <div>
      <div className="bg-banner-image h-56 bg-cover bg-center relative rounded">
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#1fa45b]  opacity-70 "></div>
        {/* Fancy Text */}
        <div className="h-full flex flex-col items-center justify-center relative z-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shadow-md">
            Dua
          </h1>
          <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
            A powerful connection between you and your Creator
          </p>
        </div>
      </div>
      <div
        role="list"
        className="mt-3 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8.9, 10, 11, 12, 13, 14, 15].map((i) => (
          <div key={i}>
            <div className="col-span-1 p-4 bg-white flex rounded-lg shadow-sm">
              <div className="flex w-16 p-4 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-gray-50">
                <Skeleton />
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm 2xl:text-lg text-gray-700 hover:text-gray-600">
                      <Skeleton width={100} />
                    </span>
                    <span>
                      <Skeleton width={100} />
                    </span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center border-l pl-4">
                  <span className="font-medium text-lg text-gray-700 hover:text-gray-600">
                    <Skeleton width={100} />
                  </span>
                  <span className="font-medium text-sm text-gray-700 hover:text-gray-600">
                    <Skeleton width={100} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
