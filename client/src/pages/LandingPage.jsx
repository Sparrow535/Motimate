import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default LandingPage;
