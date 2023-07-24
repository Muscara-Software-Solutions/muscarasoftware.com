export default function FourOFour() {
    return (
      <div
        class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 text-white"
        style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('https://optomi.com/static/01f4858fc4850a3e18a01ea6bd2114fe/03da0/optomi-professional-services-staffing-agencies-staffing-firms.jpg');"
      >
        <div class="space-y-4 text-center">
          <h1 class="text-4xl inline-block font-bold">404</h1>
          <p class="text-xl max-w-lg text-blue-100">Sorry! The page you're trying to reach doesn't exist.</p><br />
          <a class="px-3 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300 active:bg-blue-400" href="/">Home</a>
        </div>
      </div>
    );
  }
  