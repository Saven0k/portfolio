import About from "../components/About/About";
import ContactForm from "../components/ContactForm/ContactForm";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ContactForm />
      <Footer />
    </>
  );
};

export default MainLayout;