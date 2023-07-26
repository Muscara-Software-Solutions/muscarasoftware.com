import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white"
      style="background-image:linear-gradient(rgba(28, 0, 40, 0.8),rgba(28, 0, 40, 0.4)), url('https://optomi.com/static/01f4858fc4850a3e18a01ea6bd2114fe/03da0/optomi-professional-services-staffing-agencies-staffing-firms.jpg');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Empowering businesses with data-driven insights and software.</h1>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a href="/clients" class="block mt-4 text-blue-600 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold">
          Success Stories{""}

          <IconChevronRight
            class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
