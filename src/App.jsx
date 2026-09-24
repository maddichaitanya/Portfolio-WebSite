import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Training from './components/Training';

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Training />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
