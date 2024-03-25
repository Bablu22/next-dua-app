import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "@/public/dua-logo.svg";
import { usePathname } from "next/navigation";

import {
  FaCog,
  FaHeart,
  FaDownload,
  FaLock,
  FaHandshake,
  FaRegSmile,
  FaPhoneAlt,
  FaExclamationTriangle,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const navigation = [
  {
    name: "Settings",
    href: "#",
    icon: FaCog,
  },
  {
    name: "Support Us",
    href: "#",
    icon: FaHeart,
  },
  {
    name: "Download Dua App",
    href: "#",
    icon: FaDownload,
  },
  {
    name: "Privacy Policy",
    href: "#",
    icon: FaLock,
  },
  {
    name: "Thanks & Credits",
    href: "#",
    icon: FaHandshake,
  },
  {
    name: "About Us",
    href: "#",
    icon: FaRegSmile,
  },
  {
    name: "Contact Us",
    href: "#",
    icon: FaPhoneAlt,
  },
  {
    name: "Copyright Warning",
    href: "#",
    icon: FaExclamationTriangle,
  },
  {
    name: "Our Other Projects",
    href: "#",
    icon: FaProjectDiagram,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const MobileSidebar = ({ setSidebarOpen, sidebarOpen }: Props) => {
  const pathName = usePathname();

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="absolute inset-0 bg-gray-900/80" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-white">
            <div className="flex items-center justify-center h-20">
              <Image src={logo} alt="Your Company" />
            </div>
            <div className="overflow-y-auto px-6 py-4">
              <nav className="flex flex-col gap-y-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200",
                      pathName === item.href
                        ? "bg-green-500 text-white"
                        : "text-gray-700 hover:bg-green-200"
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="flex items-center  gap-5 ">
                      <item.icon className="w-5 h-5 text-green-600" />
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
            <button
              type="button"
              className="absolute top-0 right-0 m-4"
              onClick={() => setSidebarOpen(false)}
            >
              <FaXmark className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
