import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TargetGroup from '@/components/sections/TargetGroup';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-10 pt-16 pb-16">
      <Hero />
      <Services />
      <TargetGroup />
      <Portfolio />
      <Contact />
    </div>
  );
}