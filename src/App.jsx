import Banner from "./sections/banner";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Footer, Header } from "./components";
import { Comments, Contact, Project, About } from "./sections";
import Info from "./sections/info";

function App() {
  const loading = useRef([]);

  return (
    <>
      <Header />
      <main className="">
        <Banner />
        <About />
        <Project />
        <Info />
        <Comments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
