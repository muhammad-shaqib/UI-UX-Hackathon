import Image from "next/image";
import CombineHeader from "./components/Header/CombineHeader";
import HeroSection from "./components/HeroSection";
import Editor from "./components/Editor";
import ProductCard from "./components/Product";
import GreenMan from "./components/greenman";
import Couples from "./components/Couples";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <CombineHeader />
      <HeroSection />
      <Editor />
      <ProductCard />
      <GreenMan />
      <Couples />
      <LastSection />
      <Footer />
   </div>
  );
}
