import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";


function App() {
  return (
    <HashRouter>
    <div className="App">
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;