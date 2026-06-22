import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";

function App() {
  return (
    <>
      <>
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Experience />
        <Contact />
      </>
    </>
  );
}

export default App;
