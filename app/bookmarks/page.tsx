import Image from "next/image";
import Link from "next/link";
import iconImage from "@/public/icons/comming.svg";

const BookmarksPage = () => {
  return (
    <div className="bg-white p-8 sm:p-10 rounded-lg shadow-md mb-20 min-h-full flex flex-col justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">COMING SOON</h2>
        <p className="text-lg text-gray-700 mb-6">
          InshaAllah, this feature will be available very soon.
        </p>
        <div className="bg-green-100 p-6 rounded-full inline-block mb-6">
          <Image src={iconImage} alt="Dua Logo" width={100} height={100} />
        </div>
        <p className="text-lg text-gray-700 mb-8">
          We are working hard to bring this feature to you. Please stay tuned
          and check back later.
        </p>
        <Link
          href="/"
          className="px-6 py-3 text-base font-semibold leading-6 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700 flex items-center justify-center transition-colors duration-300"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default BookmarksPage;
