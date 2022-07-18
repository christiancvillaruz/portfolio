import { Helmet } from "react-helmet";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Helmet>
        <title>PORTFOLIO | CHRISTIAN ROBERT C. VILLARUZ</title>
      </Helmet>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects />
    </div>
  );
}

export default App;