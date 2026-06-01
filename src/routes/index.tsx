import { createFileRoute } from "@tanstack/react-router";
import heroDish from "@/assets/hero-dish.jpg";
import mapImg from "@/assets/map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bistro czy kasze? — Restauracja w Łodzi, ul. Rudzka 62" },
      {
        name: "description",
        content:
          "Polska kuchnia domowa, śniadania, autorska pizza i domowe ciasta. Rudzka 62, Łódź. Tel. 789 113 041. Średnia 4,1/5 z 520 opinii.",
      },
      { property: "og:title", content: "Bistro czy kasze? — Restauracja w Łodzi" },
      {
        property: "og:description",
        content:
          "Wątróbka z pampuchami, klasyczny De Volaille, pizza i domowe ciasta. Kameralne bistro przy ul. Rudzkiej 62 w Łodzi.",
      },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Bistro czy kasze?",
          image: "/og-restaurant.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rudzka 62",
            postalCode: "93-423",
            addressLocality: "Łódź",
            addressCountry: "PL",
          },
          telephone: "+48789113041",
          servesCuisine: ["Polska", "Pizza", "Śniadania"],
          priceRange: "40–60 zł",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.1",
            reviewCount: "520",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-paper text-ink font-body">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl italic tracking-tight">
            Bistro czy kasze?
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#menu" className="hover:text-clay transition-colors">Menu</a>
            <a href="#o-nas" className="hover:text-clay transition-colors">O nas</a>
            <a href="#kontakt" className="hover:text-clay transition-colors">Kontakt</a>
          </div>
          <a
            href="tel:+48789113041"
            className="px-4 py-2 bg-ink text-paper text-xs font-bold uppercase tracking-widest rounded-full hover:bg-clay transition-colors"
          >
            Rezerwacja
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <header className="md:col-span-7 space-y-8 animate-reveal">
            <div className="space-y-4">
              <span className="font-mono text-xs text-clay uppercase tracking-widest">
                Smaki Łodzi • Rudzka 62
              </span>
              <h1 className="font-display text-6xl md:text-8xl tracking-tighter leading-[0.9] text-balance">
                Polska kuchnia <br />
                <span className="italic text-clay">z duszą.</span>
              </h1>
            </div>
            <p className="max-w-md text-lg text-ink/70 leading-relaxed">
              Domowe obiady, puszyste pampuchy i autorska pizza w sercu Rudy Pabianickiej.
              Zapraszamy na chwile wytchnienia przy kawie i ciepłym cieście.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="px-8 py-4 bg-ink text-paper font-bold uppercase tracking-widest text-sm rounded-sm hover:-translate-y-0.5 transition-transform"
              >
                Zobacz menu
              </a>
              <a
                href="#kontakt"
                className="px-8 py-4 border border-ink/20 font-bold uppercase tracking-widest text-sm rounded-sm hover:border-ink transition-colors"
              >
                Znajdź nas
              </a>
            </div>
          </header>
          <div className="md:col-span-5 animate-reveal [animation-delay:200ms]">
            <img
              src={heroDish}
              alt="Klasyczny De Volaille z koperkiem na ceramicznym talerzu"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover rounded-2xl ring-1 ring-ink/5"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nas" className="py-24 bg-ink text-paper">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="font-display text-4xl italic tracking-tight">
            Kameralnie i smacznie
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-paper/80 italic">
            „Wierzymy, że jedzenie to coś więcej niż kalorie. To wspomnienia
            niedzielnych obiadów, zapach pampuchów i ciepło domowego ogniska
            przeniesione do nowoczesnego bistro."
          </p>
          <div className="flex justify-center gap-12 font-mono text-xs uppercase tracking-widest">
            <div className="space-y-2">
              <span className="block text-3xl text-clay font-display italic">4,1</span>
              520 opinii
            </div>
            <div className="space-y-2">
              <span className="block text-3xl text-clay font-display italic">40–60 zł</span>
              za osobę
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex flex-wrap gap-4 justify-between items-end border-b border-ink/10 pb-8">
            <h2 className="font-display text-5xl tracking-tight">Karta dań</h2>
            <span className="font-mono text-xs uppercase text-ink/50">
              Wybór z menu • Ceny przykładowe
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            <MenuCategory
              title="Obiady domowe"
              items={[
                {
                  name: "Wątróbka z pampuchami",
                  price: "42 zł",
                  desc: "Smażona wątróbka z karmelizowaną cebulką i jabłkiem, podawana z puszystymi pampuchami na parze.",
                },
                {
                  name: "Klasyczny De Volaille",
                  price: "46 zł",
                  desc: "Z masłem i natką pietruszki, frytki, zestaw świeżych surówek.",
                },
                {
                  name: "Zupa dnia",
                  price: "18 zł",
                  desc: "Sezonowa, gotowana codziennie. Zapytaj obsługę o dzisiejszą propozycję.",
                },
              ]}
            />
            <MenuCategory
              title="Śniadania, pizza i desery"
              items={[
                {
                  name: "Pizza swojska",
                  price: "38 zł",
                  desc: "Kiełbasa wiejska, ogórek kiszony, cebula czerwona, sos pomidorowy.",
                },
                {
                  name: "Śniadanie bistro",
                  price: "32 zł",
                  desc: "Jajka, wędlina, twaróg, świeże pieczywo, masło, warzywa sezonowe.",
                },
                {
                  name: "Ciasto dnia & kawa",
                  price: "28 zł",
                  desc: "Domowe wypieki (m.in. szarlotka z bezą), kawa z lokalnej palarni.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-paper border-t border-ink/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-5xl tracking-tight">Opinie gości</h2>
            <div className="font-mono text-xs uppercase tracking-widest text-ink/50">
              <span className="text-clay font-bold">★ 4,1</span> / 520 opinii Google
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Review
              author="Milena L."
              text="Obiad w ramach Festiwalu Restaurant Week zaskoczył smakami. Absolutnie obłędne jedzenie — krem z cukini z mascarpone do dziś pamiętam."
            />
            <Review
              author="Anna K."
              text="Bardzo klimatyczne miejsce z przemiłą obsługą. Szarlotka z bezą i zimowa herbata — polecam także na śniadania i obiady."
            />
            <Review
              author="Marek T."
              text="Domowy klimat, świeże składniki, uczciwe ceny. Wracam tu zawsze, gdy jestem w okolicy Rudzkiej."
            />
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="kontakt" className="py-24 border-t border-ink/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-3xl mb-6 tracking-tight">Godziny otwarcia</h3>
              <ul className="space-y-3 font-mono text-sm">
                <li className="flex justify-between border-b border-ink/5 pb-2 text-ink/40">
                  <span>Poniedziałek</span> <span>Zamknięte</span>
                </li>
                <li className="flex justify-between border-b border-ink/5 pb-2">
                  <span>Wtorek – Czwartek</span> <span>12:00 – 20:00</span>
                </li>
                <li className="flex justify-between border-b border-ink/5 pb-2">
                  <span>Piątek</span> <span>12:00 – 22:00</span>
                </li>
                <li className="flex justify-between border-b border-ink/5 pb-2">
                  <span>Sobota</span> <span>10:00 – 22:00</span>
                </li>
                <li className="flex justify-between border-b border-ink/5 pb-2">
                  <span>Niedziela</span> <span>10:00 – 19:00</span>
                </li>
              </ul>
            </div>
            <address className="not-italic space-y-4">
              <h3 className="font-display text-3xl tracking-tight">Zapraszamy</h3>
              <p className="text-lg">ul. Rudzka 62, 93-423 Łódź</p>
              <a
                href="tel:+48789113041"
                className="block text-clay font-bold text-xl tracking-tight hover:underline"
              >
                +48 789 113 041
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs uppercase tracking-widest border-b border-clay pb-1 hover:text-clay transition-colors"
              >
                Obserwuj na Facebooku →
              </a>
            </address>
          </div>

          <div className="relative">
            <a
              href="https://maps.google.com/?q=Rudzka+62,+Łódź"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <img
                src={mapImg}
                alt="Mapa dojazdu — Rudzka 62, Łódź"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full min-h-[400px] object-cover rounded-2xl ring-1 ring-ink/5 group-hover:opacity-90 transition-opacity"
              />
            </a>
            <div className="absolute bottom-6 left-6 right-6 bg-paper p-6 shadow-xl rounded-lg border border-ink/5">
              <p className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-2">
                Opinia gościa
              </p>
              <p className="italic text-sm">
                „Najlepsza wątróbka jaką jadłam — klimat jak u babci, ale w nowoczesnym wydaniu."
              </p>
              <div className="mt-3 text-xs font-bold font-mono text-clay">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-ink/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display text-lg italic tracking-tight">
            Bistro czy kasze?
          </span>
          <p className="text-xs font-mono text-ink/40 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Bistro czy kasze? Smaki, które zostają w pamięci.
          </p>
          <div className="flex gap-3">
            <span className="size-2 rounded-full bg-clay/30" />
            <span className="size-2 rounded-full bg-clay/50" />
            <span className="size-2 rounded-full bg-clay/80" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; price: string; desc: string }[];
}) {
  return (
    <div className="space-y-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-baseline gap-4">
              <h4 className="font-display text-xl">{item.name}</h4>
              <div className="flex-grow border-b border-ink/10 border-dotted" />
              <span className="font-mono text-sm">{item.price}</span>
            </div>
            <p className="text-sm text-ink/60 mt-1 italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Review({ author, text }: { author: string; text: string }) {
  return (
    <figure className="space-y-4 p-6 bg-ink/[0.02] rounded-lg border border-ink/5">
      <div className="text-clay font-mono text-xs font-bold">★★★★★</div>
      <blockquote className="italic text-ink/80 leading-relaxed">„{text}"</blockquote>
      <figcaption className="font-mono text-xs uppercase tracking-widest text-ink/50">
        — {author}
      </figcaption>
    </figure>
  );
}
