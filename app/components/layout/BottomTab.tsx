"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { TiHome } from "react-icons/ti";
import { MdSpaceDashboard } from "react-icons/md";
import { FaLightbulb, FaBookmark, FaRegUserCircle } from "react-icons/fa";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: TiHome,
  },
  {
    name: "All Duas",
    href: "/all-duas",
    icon: MdSpaceDashboard,
  },
  {
    name: "Memories",
    href: "/memories",
    icon: FaLightbulb,
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: FaBookmark,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: FaRegUserCircle,
  },
];

const BottomTab = () => {
  const pathName = usePathname();
  const [activeTab, setActiveTab] = useState(pathName);
  const handleTabClick = (href: string) => {
    setActiveTab(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`flex flex-col items-center justify-center w-full py-2 ${
            activeTab === item.href ? "text-green-600" : "text-gray-500"
          } ${activeTab === item.href ? "bg-gray-100" : ""} ${
            item.name === "Profile" ? "rounded-b-lg" : "rounded-t-lg"
          }`}
          onClick={() => handleTabClick(item.href)}
        >
          <item.icon className="w-6 h-6 mb-1" /> {/* Adjusted icon size */}
          <span className="text-xs">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default BottomTab;
