import "./myComponents/styles/globalStyle.css";
import "./myComponents/styles/responsive.css";
import Navbar from "./myComponents/navbar";
import Profile from "./myComponents/profile";
import AboutMe from "./myComponents/aboutMe";
import Projects from "./myComponents/projects"
import Skills from "./myComponents/skills";
import ContactMe from "./myComponents/contactMe";
import Footer from "./myComponents/footer"

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <AboutMe />
      <Projects />
      <Skills />
      {/* <ContactMe /> */}
      <Footer />
    </>
  );
}

export default App;
