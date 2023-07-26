import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muscara Software Solutions</title>
        <meta
          name="description"
          content="Empowering businesses with data-driven insights and software"
        />
      </Head>
      <Header active="true" />
      <Hero />
      <Features />
      <Footer children="" />
    </>
  );
}
