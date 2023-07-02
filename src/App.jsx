import Contact from "./components/contact";
import Featured from "./components/featured";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Home from "./components/home";
import Personal from "./components/personal";
import Work from "./components/work";

function App() {
  return (
    <section>
      <Hero />
      <Home />
      <Featured/>
      <Personal/>
      <Work/>
      <Contact/>
      <Footer/>
    </section>
  );
}

export default App;
