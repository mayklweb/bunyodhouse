import { Footer, Header } from "@/components";
import { About, Banner, Comments, Contact, Project } from "@/sections";
import AboutView1 from "@/sections/about/about-view-1";
import BannerView1 from "@/sections/banner/banner-view-1";
import Info from "@/sections/info";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerView1/>
        {/* <Banner /> */}
        <AboutView1/>
        {/* <About /> */}
        <Project />
        <Info />
        <Comments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
