import Features from "../components/Features";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSec from "../components/HeroSec";
import FAQ from "../components/FAQ";
const Home = () => {
  return (
    <div className="bg-[#00161D] min-h-screen">
      <Header />
      <HeroSec />
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Explore />
      <Footer />
    </div>
  );
};

export default Home;
