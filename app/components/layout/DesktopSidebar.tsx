import logo from "@/public/dua-logo.svg";
import Image from "next/image";

import { MdSpaceDashboard } from "react-icons/md";
import { FaLightbulb, FaBookmark, FaHandHoldingHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { TbIrregularPolyhedronPlus } from "react-icons/tb";
import { ImLeaf } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";

const navigation = [
  {
    name: "Home",
    href: "#",
    icon: TiHome,
    current: true,
  },
  {
    name: "All Duas",
    href: "#",
    icon: MdSpaceDashboard,
  },
  {
    name: "Memories",
    href: "#",
    icon: FaLightbulb,
  },
  {
    name: "Bookmarks",
    href: "#",
    icon: FaBookmark,
  },
  {
    name: "Ruqyah",
    href: "#",
    icon: TbIrregularPolyhedronPlus,
  },
  {
    name: "Duo Info",
    href: "#",
    icon: ImLeaf,
  },
  {
    name: "Books",
    href: "#",
    icon: IoBookSharp,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const DesktopSidebar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col ml-10 my-5 shadow rounded-2xl">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 rounded-2xl">
        <div className="flex mt-5 justify-center items-center">
          <div className="w-18 h-18 overflow-hidden">
            {" "}
            {/* Adjust the width and height here as needed */}
            <Image src={logo} alt="Your Company" className="w-full" />
          </div>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-green-600 border-l-4 border-green-600"
                          : "text-gray-700",
                        "group flex items-center p-3 rounded-md text-sm font-semibold bg-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-105"
                      )}
                    >
                      <span className="flex items-center justify-center w-8 h-8 bg-gray-light rounded-full">
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-green-600"
                              : "text-gray-400 group-hover:text-green-600",
                            "h-5 w-5"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-2">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="w-full mb-5">
              <a
                href="#"
                className=" w-full px-4 py-2 text-sm font-semibold leading-6 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:bg-green-700 flex items-center justify-center"
              >
                <FaHandHoldingHeart
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopSidebar;
