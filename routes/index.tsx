import { Head } from "$fresh/runtime.ts";
import Footer from "../components/Footer.tsx";
import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muscara Software Solutions</title>
      </Head>
      <Hero />
      <Features />
      <Footer children="" />
    </>
  );
}
