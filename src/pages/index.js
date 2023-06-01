
import { Calistoga, Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import CarouselList from "@/components/carouselList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-0 p-0 relative bg-primary h-screen">
        <Navbar/>
        <Hero/>
        <CarouselList/>
    </div>
  );
}
