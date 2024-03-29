import React from "react";
import Skeleton from "react-loading-skeleton";

const DuaCardLoading = () => {
  return (
    <>
      {[1, 2].map((i) => (
        <div key={i} className="bg-white p-4 sm:p-8 rounded-lg shadow-md mb-5">
          <div className="flex flex-col gap-7 rounded-lg border px-4 py-6 sm:px-8">
            <div className="flex items-center gap-2.5">
              <Skeleton />
              <span className="text-green-600 text-lg font-semibold">
                <Skeleton />
              </span>
            </div>

            <p className="text-lg text-gray-700">
              <Skeleton />
            </p>

            <p className="py-2.5 text-right font-quran text-2xl text-gray-700">
              <Skeleton />
            </p>

            <div className="space-y-2.5">
              <p>
                <Skeleton />
              </p>

              <Skeleton />
            </div>

            <div className="flex items-center gap-4">
              <Skeleton />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DuaCardLoading;
