import Banner from "./sections/banner";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Footer, Header } from "./components";
import { Comments, Project } from "./sections";

function App() {
  const loading = useRef([]);



  return (
    <>
      <Header />
      <main className="flex-auto aabsolute top-0 z-[1]">
        <Banner />
        <Project/>
        <Comments/>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
