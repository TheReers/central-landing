"use client"
import Footer from './components/footer';
import HeroSection from './components/heroSection';
import GuideSection from './components/guideSection';
import Questions from './components/questions';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#f9f9f6]">
      <HeroSection/>
      <GuideSection/>
      <Questions/>
      <Footer/>
    </main>
  );
}
