import ProductDetail from "@/components/ProductDetail";
import Section from "@/components/Section";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <ProductDetail />
    </main>
  );
}
