
export default function HomePage() {
  const phone = "225-297-6430";
  const phoneLink = "+12252976430";
  const email = "velocityhaulpros@gmail.com";

  const services = [
    {
      title: "Marketplace Pickups",
      desc: "Fast pickup and delivery for Facebook Marketplace and local sellers.",
      icon: "🛋️",
    },
    {
      title: "Furniture Delivery",
      desc: "Couches, dressers, tables, mattresses delivered safely.",
      icon: "🚚",
    },
    {
      title: "Store Pickups",
      desc: "Home Depot, Lowe’s, and furniture store pickups.",
      icon: "📦",
    },
    {
      title: "Junk Removal",
      desc: "Quick haul-off for unwanted items and cleanouts.",
      icon: "🗑️",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-5xl font-black">
          On-Demand Truck Delivery in Baton Rouge
        </h1>
        <p className="mt-4 text-xl text-slate-600">
          NO TRUCK? NO PROBLEM. Same-day delivery and junk removal.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`tel:${phoneLink}`}
            className="rounded-xl bg-black px-6 py-3 text-white"
          >
            Call Now
          </a>
          <a
            href={`sms:${phoneLink}`}
            className="rounded-xl border border-black px-6 py-3"
          >
            Text for Quote
          </a>
          <a
            href={`mailto:${email}`}
            className="rounded-xl border border-black px-6 py-3"
          >
            Email Us
          </a>
        </div>

        <p className="mt-6 text-slate-500">
          Serving Baton Rouge and surrounding areas
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">Services</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl bg-white p-6 shadow">
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-3 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold">Need something moved today?</h2>
          <p className="mt-4 text-slate-600">
            Call, text, or email for a fast quote.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href={`tel:${phoneLink}`}
              className="rounded-xl bg-black px-8 py-4 text-white"
            >
              Call {phone}
            </a>
            <a
              href={`sms:${phoneLink}`}
              className="rounded-xl border border-black px-8 py-4"
            >
              Text {phone}
            </a>
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
