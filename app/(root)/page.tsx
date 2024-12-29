"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-screen-xl mx-auto lg:py-0 p-8 sm:p-12">
      <Header />
      <main className="flex flex-col lg:flex-1 gap-y-12">
        <About />
        <Experiences />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
