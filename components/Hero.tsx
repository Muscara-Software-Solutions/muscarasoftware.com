export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white"
      style="background-image:linear-gradient(rgba(28, 0, 40, 0.8),rgba(28, 0, 40, 0.4)), url('https://optomi.com/static/01f4858fc4850a3e18a01ea6bd2114fe/03da0/optomi-professional-services-staffing-agencies-staffing-firms.jpg');"
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Muscara Software Solutions</h1>
        <p class="text-xl max-w-lg text-blue-100">We design and develop reliable and scalable services that deliver customizable and actionable data.</p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a href="mailto:support@muscarasoftware.com" class="block mt-4 text-blue-600 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold">
          Contact{""}
        </a>
      </div>
    </div>
  );
}
