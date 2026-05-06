import About from "../components/About/About";
import Contact from "../components/Contact/Contacts";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default MainLayout;