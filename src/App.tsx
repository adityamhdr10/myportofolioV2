import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-white text-black">
      <ScrollProgress />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}