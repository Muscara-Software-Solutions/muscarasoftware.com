const LINKS = [
  {
    title: "Blog",
    href: "https://blog.muscarasoftware.com"
  },
  {
    title: "Terms of Service",
    href: "https://www.termsofusegenerator.net/live.php?token=P9oIDp2heEsiircTAun3CVh7tVnN1fsb",
  },
  {
    title: "Privacy Policy",
    href: "https://www.freeprivacypolicy.com/live/14cb41aa-180f-43ea-aecb-d27cd9b6f0aa",
  },
  {
    title: "Contact",
    href: "mailto:support@muscarasoftware.com",
  },
];

export default function Footer() {
  return (
    <footer class="border-t-2 border-gray-200 bg-gray-100 md:h-16 flex gap-4 justify-center">
      <div class="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-screen-xl mx-auto w-full px(4 sm:6 md:8) p-4">
        <div class="text(gray-600 center)">
          <span>© {new Date().getFullYear()} Muscara Software Solutions, LLC.</span>
        </div>

        <div class="flex items-center gap-8">
          {LINKS.map((link) => (
            <a href={link.href} class="text-gray-600 hover:underline">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
