import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <div className="  bg-[#373a49] text-white">
      <Navbar />
      <Header />
      <About />
      <Achievements />
    </div>
  );
}
