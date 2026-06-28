import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/ui/Marquee';
import { CourseConcept } from './components/sections/CourseConcept';
import { About } from './components/sections/About';
import { Results } from './components/sections/Results';
import { Divider } from './components/ui/Divider';
import { Program } from './components/sections/Program';
import { Tariffs } from './components/sections/Tariffs';
import { Masters } from './components/sections/Masters';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';
import { Navbar } from './components/ui/Navbar';

import { Teasers } from './components/sections/Teasers';

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-warm-white text-ink overflow-x-hidden selection:bg-terracotta selection:text-cream">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CourseConcept />
        <ResultDivider />
        <Results />
        <Divider text="программа курса" />
        <Program />
        <Teasers />
        <Tariffs />
        <About />
        <Masters />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

// Added an extra decorative divider specifically between Concept and Results
function ResultDivider() {
  return <Divider text="как это работает" />;
}
