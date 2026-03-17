import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
      <section className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-brand-400">
            Gastronomia
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Modern gastronomy in the heart of the city.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-300 md:text-base">
            Seasonal tasting menus, carefully curated wines, and a warm,
            contemporary atmosphere. Reserve your table or order your favourites
            from home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reserve"
              className="rounded-full bg-brand-500 px-6 py-2 text-sm font-medium text-white shadow-md shadow-brand-500/30 hover:bg-brand-400 transition-colors"
            >
              Book a table
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-100 hover:border-brand-400 hover:text-brand-300 transition-colors"
            >
              View menu
            </Link>
            <Link
              href="/order"
              className="rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium text-neutral-100 hover:border-brand-400 hover:text-brand-300 transition-colors"
            >
              Order online
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-neutral-400 md:text-sm">
            <div>
              <p className="font-medium text-neutral-200">Opening hours</p>
              <p>Mon–Thu: 18:00–23:00</p>
              <p>Fri–Sat: 18:00–00:00</p>
              <p>Sun: Closed</p>
            </div>
            <div>
              <p className="font-medium text-neutral-200">Address</p>
              <p>123 Culinary Street</p>
              <p>Gourmet City</p>
            </div>
            <div>
              <p className="font-medium text-neutral-200">Contact</p>
              <p>+1 (555) 123-4567</p>
              <p>hello@gastronomia.example</p>
            </div>
          </div>
        </div>
        <div className="relative h-64 overflow-hidden rounded-3xl border border-neutral-800 bg-[radial-gradient(circle_at_top,_#f97316_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e9_0,_transparent_55%)] md:h-[420px]">
          <div className="absolute inset-8 rounded-3xl border border-white/10 bg-neutral-950/40 backdrop-blur">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Chef&apos;s table
                </p>
                <p className="mt-2 text-lg font-medium text-neutral-50">
                  Limited seats for an immersive tasting experience curated by
                  our chef.
                </p>
              </div>
              <div className="text-xs text-neutral-300">
                <p>Book the chef&apos;s table for special occasions.</p>
                <p className="mt-1 text-neutral-400">
                  Wine pairing available · 8‑course menu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-10 md:grid-cols-3">
        <FeatureCard
          title="Seasonal ingredients"
          description="Our menus change with the seasons, highlighting the best local produce."
        />
        <FeatureCard
          title="Curated wine cellar"
          description="A thoughtful selection of wines and pairings for every course."
        />
        <FeatureCard
          title="Private events"
          description="Tailor-made menus and experiences for celebrations and corporate dinners."
        />
      </section>
    </div>
  );
}

function FeatureCard(props: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <h2 className="text-sm font-semibold text-neutral-50">{props.title}</h2>
      <p className="mt-2 text-sm text-neutral-300">{props.description}</p>
    </div>
  );
}

