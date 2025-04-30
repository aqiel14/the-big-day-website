import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Harga from "./components/Harga";
import Tema from "./components/Tema";
import Fitur from "./components/Fitur";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      {/* <section id="portfolio">
        <Portfolio />
      </section> */}
      <section id="fitur">
        <Fitur />
      </section>
      <section id="harga">
        <Harga />
      </section>
      <section id="tema">
        <Tema />
      </section>
      <Footer />
    </>
  );
}
