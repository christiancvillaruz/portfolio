import { Helmet } from "react-helmet";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Helmet>
        <title>PORTFOLIO | CHRISTIAN ROBERT C. VILLARUZ</title>
      </Helmet>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;