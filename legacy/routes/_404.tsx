
import { Head } from "$fresh/runtime.ts";
import FourOFour from "../components/404.tsx";
import Footer from "../components/Footer.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <FourOFour />
      <Footer children="" />
    </>
  );
}
