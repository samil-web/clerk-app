import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";

export default function Project() {
  return (
    <div className="flex flex-col justify-center pt-5 pb-16 bg-gray-950">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
