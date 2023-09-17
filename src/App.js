import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Stats from "./components/Stats";
import Stats2 from "./components/Stats2";

function App() {
  return (
    <>
      <Banner />
      <Header />
      <Hero />
      <section id="featured">
        <Features />
      </section>
      <section id="stats">
        <Stats2 />
        {/* <Stats /> */}
      </section>
      <Footer />
    </>
  );
}

export default App;
