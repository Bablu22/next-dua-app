"use client";
import { PropsWithChildren, useState } from "react";

import logo from "@/public/dua-logo.svg";
import Image from "next/image";

import BottomTab from "./BottomTab";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <DesktopSidebar />
        <div className="lg:hidden">
          <BottomTab />
        </div>

        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
