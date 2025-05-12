

import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { HeroHome } from "@/components/HeroHome";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroHome />
      <Carousel />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}
