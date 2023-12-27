import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
