import IconServer from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/server.tsx";
import IconDevice from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-laptop.tsx";
import IconAnalytics from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-analytics.tsx";

export default function Features() {
  const featureItems = [
    {
      icon: IconDevice,
      title: "Website & SEO",
      description: "",
    },
    {
      icon: IconAnalytics,
      title: "Data Analysis & Security",
      description: "",
    },
    {
      icon: IconServer,
      title: "Software Consulting & Testing",
      description: "",
    },
  ];

  return (
    <div style="padding-top: 2.5%;">
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Services</h1>
      </div>
      <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
        {featureItems.map((item) => {
          return (
            <div class="flex-1 space-y-2">
              <div class="bg-blue-600 inline-block p-3 rounded-xl text-white">
                <item.icon class="w-10 h-10" aria-hidden="true" />
              </div>
              <h1 class="font-bold text-2xl">{item.title}</h1>
              <p class="text-xl">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
