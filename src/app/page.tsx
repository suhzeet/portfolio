import About from "./about/page";
import Achievements from "./achievements/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 mb-12">
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
}
