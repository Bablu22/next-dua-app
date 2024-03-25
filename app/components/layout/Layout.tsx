import { PropsWithChildren } from "react";

import BottomTab from "./BottomTab";
import DesktopSidebar from "./DesktopSidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div>
        <DesktopSidebar />
        <div className="lg:hidden">
          <BottomTab />
        </div>

        <main className="py-4 lg:py-10 lg:pl-72">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
