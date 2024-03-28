import logo1 from "@/public/1.svg";
import logo2 from "@/public/2.svg";
import logo3 from "@/public/3.svg";
import logo4 from "@/public/4.svg";
import logo5 from "@/public/5.svg";
import logo6 from "@/public/6.svg";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Last Read",
    icon: logo1,
    href: "#",
    bgColor: "#F8F3FF",
  },
  {
    name: "Blogs",
    icon: logo2,
    href: "#",
    bgColor: "#FFF8EA",
  },
  {
    name: "Ruqyah",
    icon: logo3,
    href: "#",
    bgColor: "#FFF1FA",
  },
  {
    name: "Dua Info",
    icon: logo4,
    href: "#",
    bgColor: "#F2F8FF",
  },
  {
    name: "Books",
    icon: logo5,
    href: "#",
    bgColor: "#E3FFFE",
  },
  {
    name: "Dua Audio",
    icon: logo6,
    href: "#",
    bgColor: "#FEF5E8",
  },
];
const Items = () => {
  return (
    <div>
      <ul
        role="list"
        className="mt-3 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Link
            href={project.href}
            key={project.name}
            className="col-span-1 p-2 bg-white  flex rounded-lg shadow-sm"
          >
            <div
              className={`flex w-16 p-4 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white`}
              style={{ backgroundColor: project.bgColor }}
            >
              <Image
                src={project.icon}
                alt={project.name}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md  border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <div className="font-medium text-lg text-gray-700 hover:text-gray-600">
                  {project.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Items;
