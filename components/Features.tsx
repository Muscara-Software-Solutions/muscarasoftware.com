import IconServer from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/server.tsx";
import IconDevice from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-mobile.tsx";
import IconAnalytics from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-analytics.tsx";

export default function Features() {
  const featureItems = [
    {
      icon: IconDevice,
      title: "PWA & Native Development",
      description: "We design and deploy applications for all platforms including iOS, Android, Windows, Linux, macOS, you name it, we can do it.",
    },
    {
      icon: IconAnalytics,
      title: "Analytics",
      description: "We provide an advanced suite of tools and services tailored for processing and analyzing substantial datasets.",
    },
    {
      icon: IconServer,
      title: "Hosting",
      description: "We prioritize three critical aspects; scalability, consistency, and reliability. We ensure 100% uninterrupted service for all our clients.",
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
