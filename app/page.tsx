import dynamic from "next/dynamic";
import Banner from "./components/Banner";
import { prisma } from "@/prisma";
import Categories from "./components/Categories";
const Items = dynamic(() => import("@components/Items"), { ssr: false });

const fetchCategories = async () => {
  const categoriesData = await prisma.category.findMany();

  const categories = categoriesData.map((category) => ({
    ...category,
    cat_icon: `/icons/${category.cat_icon}.svg`,
  }));

  return categories;
};

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div>
      <Banner />
      <Items />
      <Categories categories={categories} />
    </div>
  );
}
