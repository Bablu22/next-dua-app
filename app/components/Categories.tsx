import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoriesProps {
  categories: Category[];
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">Categories</h2>
      <ul
        role="list"
        className="mt-3 mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {categories.map((category) => (
          <Link href={`/categories/${category.cat_id}`} key={category.cat_id}>
            <div className="col-span-1 p-4 bg-white flex rounded-lg shadow-sm">
              <div className="flex w-16 p-4 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-gray-50">
                <Image
                  src={category.cat_icon}
                  alt={category.cat_name_en}
                  className="w-full h-auto"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm 2xl:text-lg text-gray-700 hover:text-gray-600">
                      {category.cat_name_en}
                    </span>
                    <span> Subcategory: {category.no_of_subcat}</span>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-center border-l pl-4">
                  <span className="font-medium text-lg text-gray-700 hover:text-gray-600">
                    {category.no_of_dua}
                  </span>
                  <span className="font-medium text-sm text-gray-700 hover:text-gray-600">
                    Dua
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
