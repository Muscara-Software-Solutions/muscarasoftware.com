import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Projects from "../components/Projects.tsx";
import projects from "../data/showcase.json" assert { type: "json" };

export default function MainPage(props: PageProps) {
  const ogImageUrl = "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?size=626&ext=jpg&ga=GA1.1.155607791.1690326295&semt=ais"

  return (
    <>
      <Head>
        <title>Muscara Software Solutions</title>
        <meta name="description" content="Empowering businesses with data-driven insights and software." />
        <meta property="og:title" content="Muscara Software Solutions" />
        <meta property="og:description" content="Empowering businesses with data-driven insights and software." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="view-transition" content="same-origin" />
      </Head>

      <div class="flex flex-col min-h-screen">
        <div class="flex-1">
          <Intro />
          <Showcase />
          <StartJourney />
        </div>
        <Footer />
      </div>
    </>
  );
}

function Intro() {
  return (
    <section class="max-w-screen-xl mx-auto my-8 sm:my-16 px(4 sm:6 md:8) space-y-8 sm:space-y-16 lg:mb-32">
      <div class="max-w-screen-xl mx-auto sm:my-8 md:my-16 sm:space-y-12 w-full">
        <div class="md:flex items-center">
          <div class="flex-1 text-center md:text-left">
            <h2 class="py-2 text(5xl sm:5xl lg:6xl gray-900) sm:tracking-tight sm:leading-[1.1]! font-extrabold lg:max-w-lg mx-auto sm:mx-0">
              <span class="text-green-300">Muscara</span> Software Solutions.
            </h2>

            <p class="mt-2 text-gray-600 text-xl">
              Empowering businesses with data-driven insights and software.
            </p>
            <div class="mt-8 flex flex-col justify-center md:justify-start sm:flex-row gap-4">
              <div>
                <a
                  href="mailto:support@muscarasoftware.com"
                  class="inline-flex w-auto shrink-0 px-3 py-2 bg-white rounded border(green-500 2) hover:bg-gray-200 active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed) whitespace-nowrap"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <picture class="block mt-8 md:mt-0 mx-auto w-60 md:w-96 md:mr-16 xl:mr-32">
            <img
              src="https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?size=626&ext=jpg&ga=GA1.1.155607791.1690326295&semt=ais"
              width={800}
              height={678}
              alt=""
            />
          </picture>
        </div>
      </div>
      <Features />
    </section>
  );
}

function Features() {
  const item = "flex items-center gap-5";
  const desc = "flex-1 text-xl";

  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
      <div class={item}>
        <div class="bg-green-200 rounded-full w-20 h-20">
        </div>
        <div class={desc}>
          <b>Website Design & Search Engine Optimization</b> to increase your businesses digital presence.
        </div>
      </div>

      <div class={item}>
        <div class="bg-yellow-200 rounded-full w-20 h-20">
        </div>
        <div class={desc}>
          <b>Software Consulting & Testing</b> to increase your products reliability and scalability.
          default.
        </div>
      </div>

      <div class={item}>
        <div class="bg-blue-200 rounded-full w-20 h-20">
        </div>
        <div class={desc}>
          <b>Suite of Data Analysis Tools</b> to improve processing of your large datasets.
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <section class="max-w-screen-xl mx-auto space-y-16 px(4 sm:6 md:8) space-y-4">
      <h2 id="showcase" class="text(4xl gray-600) font-bold mb-4">
        <a href="#showcase" class="hover:underline">
          Success Stories
        </a>
      </h2>
      <p class="text-gray-600">
        Below is a selection of clients that we have proudly served.
      </p>
      <Projects items={projects.slice(0, 3)} class="gap-8" />
    </section>
  );
}

function StartJourney() {
  return (
    <section class="max-w-screen-xl mx-auto py-16 px(4 sm:6 md:8) space-y-4 md:mb-16">
      <div class="flex flex-col md:flex-row justify-start items-center gap-4">
      </div>
    </section>
  );
}
