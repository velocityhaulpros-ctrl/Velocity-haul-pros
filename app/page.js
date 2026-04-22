const services = [
  {
    title: "Marketplace Pickups",
    description:
      "Fast pickup and delivery for Facebook Marketplace, OfferUp, and local seller purchases.",
  },
  {
    title: "Furniture Delivery",
    description:
      "Professional transport for couches, dressers, tables, mattresses, and more.",
  },
  {
    title: "Store Pickups",
    description:
      "Need a truck for Home Depot, Lowe’s, furniture stores, or bulky retail items? We handle it.",
  },
  {
    title: "Junk Removal",
    description:
      "Quick haul-off for unwanted furniture, garage cleanouts, curbside items, and bulky junk.",
  },
];

const highlights = [
  "Same-day availability",
  "Fast quotes by call or text",
  "Local, reliable service",
  "Baton Rouge and surrounding areas",
];

const steps = [
  {
    number: "01",
    title: "Send the details",
    description:
      "Text or call with your pickup location, drop-off location, and a photo of the item if possible.",
  },
  {
    number: "02",
    title: "Get a quick quote",
    description:
      "You’ll get a fast response with pricing and availability for same-day or next-day service.",
  },
  {
    number: "03",
    title: "We handle the move",
    description:
      "We pick it up, deliver it, or haul it away safely and professionally.",
  },
];

export default function HomePage() {
  const phoneDisplay = "225-297-6430";
  const phoneLink = "+12252976430";
  const email = "velocityhaulpros@gmail.com";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10">
          <header className="flex flex-col gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-black tracking-wide">
                Velocity Haul Pros LLC
              </div>
              <div className="text-sm text-slate-300">
                Pickup • Delivery • Junk Removal
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
              <a href="#services" className="transition hover:text-orange-400">
                Services
              </a>
              <a
                href="#how-it-works"
                className="transition hover:text-orange-400"
              >
                How It Works
              </a>
              <a href="#contact" className="transition hover:text-orange-400">
                Contact
              </a>
              <a
                href={`tel:${phoneLink}`}
                className="rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-400"
              >
                Call Now
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div>
              <div className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
                Baton Rouge and surrounding areas
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Professional truck delivery and junk removal when you need it.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                From Marketplace pickups and furniture delivery to store runs
                and junk removal, Velocity Haul Pros makes booking simple, fast,
                and reliable.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${phoneLink}`}
                  className="rounded-2xl bg-orange-500 px-7 py-4 text-center text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400"
                >
                  Call {phoneDisplay}
                </a>
                <a
                  href={`sms:${phoneLink}`}
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Text for a Quote
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                    Fast Quote
                  </p>
                  <h2 className="mt-2 text-3xl font-black">Request service</h2>
                </div>
                <div className="rounded-2xl bg-orange-100 px-4 py-3 text-2xl">
                  🚚
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                  placeholder="Your name"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                  placeholder="Phone number"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                  placeholder="Pickup location"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                  placeholder="Drop-off location"
                />
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                  placeholder="Tell us what needs to be picked up, delivered, or hauled away"
                />
                <a
                  href={`sms:${phoneLink}`}
                  className="block rounded-2xl bg-slate-950 px-6 py-4 text-center font-bold text-white transition hover:bg-slate-800"
                >
                  Text for Immediate Quote
                </a>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                For the fastest quote, send a photo of the item and both
                addresses by text.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Reliable hauling for everyday needs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you bought something local, need store pickup, or want
              junk gone fast, Velocity Haul Pros is built to make the process
              easy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-1.5 w-16 rounded-full bg-orange-500" />
                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-100 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
                How It Works
              </p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Simple, fast, and professional from start to finish
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                No complicated process. Just reach out, get your quote, and get
                it handled.
              </p>
            </div>

            <div className="space-y-5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
                Contact Velocity Haul Pros
              </p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Need something moved today?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Call, text, or email now for a fast quote on pickup, delivery,
                or junk removal.
              </p>
              <div className="mt-6 space-y-2 text-slate-200">
                <p>{phoneDisplay}</p>
                <p>{email}</p>
                <p>Baton Rouge and surrounding areas</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:${phoneLink}`}
                className="rounded-2xl bg-orange-500 px-8 py-4 text-center font-bold text-white transition hover:bg-orange-400"
              >
                Call Now
              </a>
              <a
                href={`sms:${phoneLink}`}
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Text for Quote
              </a>
              <a
                href={`mailto:${email}`}
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
                          }

