import PixelBackground from "@/components/PixelBackground";
import ToastProvider from "@/components/ToastProvider";
import VisitorCursor from "@/components/VisitorCursor";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Toolkit from "@/components/sections/Toolkit";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <ToastProvider>
      <PixelBackground />
      <Header />
      <main>
        <Hero />
        <VisitorCursor />
        <About />
        <Work />
        <Journey />
        <Toolkit />
      </main>
      <Contact />
    </ToastProvider>
  );
}
