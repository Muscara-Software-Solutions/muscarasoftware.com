import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";

export default function Results() {
  const featureItems = [
    {
      icon: "https://bigteams-public-prod.s3.amazonaws.com/library/images/westjessaminehighschool_bigteams_15476/logos/15476/15476.png",
      title: "West Jessamine High School",
      description: "",
      link: "https://blog.muscarasoftware.com"
    },
    {
      icon: "data:image/jpeg;base64,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",
      title: "JCS District Technology Office",
      description: "",
      link: "https://blog.muscarasoftware.com"
    },
    {
      icon: "https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/listings/4oOFZ2YJbI00.jpg",
      title: "Northern Kentucky University",
      description: "",
      link: "https://blog.muscarasoftware.com"
    },
    {
      icon: "https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/329122076_1404842203641408_6641721521579282114_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6SoXYmfm7kEAX9G4-R4&_nc_ht=scontent.fosu2-1.fna&oh=00_AfBVpnkzepSC4rtm890cNPzi0IURndvdc1F24uaabL36eg&oe=64C62198",
      title: "Right Track Nutrition",
      description: "",
      link: "https://blog.muscarasoftware.com"
    }
  ];

  return (
    <div style="padding-top: 2.5%;">
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Success Stories</h1>
      </div>
      <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
        {featureItems.map((item) => {
          return (
            <div class="flex-1 space-y-2">
              <div class="bg-white-600 inline-block p-3 rounded-xl text-white">
                <img src={item.icon} class="w-40 h-40" aria-hidden="true" />
              </div>
              <h1 class="font-bold text-2xl">{item.title}</h1>
              <p class="text-xl">
                {item.description}
              </p>

              {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-blue-600 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight
                      class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
