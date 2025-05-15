import Banner from "./sections/banner";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Footer, Header } from "./components";
import { Comments, Contact, Project, About } from "./sections";
import Info from "./sections/info";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function App() {


  return (
    <>
      <Header />
      <main>
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
