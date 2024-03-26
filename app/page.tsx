import dynamic from "next/dynamic";
import Banner from "./components/Banner";
const Items = dynamic(() => import("@components/Items"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Banner />
      <Items />
    </div>
  );
}
