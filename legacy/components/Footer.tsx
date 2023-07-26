import { ComponentChildren } from "preact";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Support",
      children: [
        { name: "Email", href: "mailto:support@muscarasoftware.com" },
      ]
    },
    {
      title: "Legal",
      children: [
        { name: "Terms", href: "https://www.termsofusegenerator.net/live.php?token=P9oIDp2heEsiircTAun3CVh7tVnN1fsb" },
        { name: "Privacy Policy", href: "https://www.freeprivacypolicy.com/live/14cb41aa-180f-43ea-aecb-d27cd9b6f0aa" },
      ]
    },
    {
      title: "Social",
      children: [
        { name: "GitHub", href: "https://github.com/muscara-software-solutions" },
        { name: "Twitter", href: "https://twitter.com/muscarasoftware" },
        { name: "LinkedIn", href: "https://linkedin.com/company/muscara-software-solutions" }
      ]
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <div class="font-bold text-2xl">
            Muscara Software Solutions
          </div>
        </div>
        <div class="text-gray-500">
          Copyright © <script>document.write(new Date().getFullYear())</script><br /> All right reserved.
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
      </div>
    </div>
  );
}
