import AboutMe from "./components/about";
import ContactSection from "./components/contact";
import HeroSection from "./components/hero";
import NavBar from "./components/nav";
import ProjectsSection from "./components/projects";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
