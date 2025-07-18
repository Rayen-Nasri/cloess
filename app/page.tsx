
'use client';
import "./globals.css";
import { HeroSection } from "./landing/heroSection/heroSection";
import { NavBar } from "./landing/navBar/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>

  );
}
