import { Helmet } from "react-helmet";
import ScrollUpButton from "react-scroll-up-button";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Helmet>
        <meta name="theme-color" content="#2C3333" />
        <meta
          name="description"
          content="Portfolio web site created using create-react-app"
        />
        <title>PORTFOLIO | CHRISTIAN ROBERT C. VILLARUZ</title>
      </Helmet>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollUpButton ToggledStyle={{right: 80}}/>
    </div>
  );
}

export default App;