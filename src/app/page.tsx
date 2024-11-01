

import React from "react";
import HeroSection from "./components/hero-section/HeroSection";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <BackgroundBeamsWithCollision>
        <div className="container mt-24 mx-auto px-12 py-4 mb-28">
          <HeroSection />
        </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
};

export default Home;
