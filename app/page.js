export default function VelocityHaulProsWebsite() {
const phone = "+12252976430";
const email = "velocityhaulpros@gmail.com";


const services = [
{ title: "Marketplace Pickups", desc: "Fast pickup and delivery for Facebook Marketplace and local sellers.", icon: "🛋️" },
{ title: "Furniture Delivery", desc: "Couches, dressers, tables, mattresses delivered safely.", icon: "🚚" },
{ title: "Store Pickups", desc: "Home Depot, Lowe’s, and furniture store pickups.", icon: "📦" },
{ title: "Junk Removal", desc: "Quick haul-off for unwanted items and cleanouts.", icon: "🗑️" },
];


return (




  {/* HERO */}
  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="text-5xl font-black">On-Demand Truck Delivery in Baton Rouge</h1>
    <p className="mt-4 text-xl text-slate-600">NO TRUCK? NO PROBLEM. Same-day delivery & junk removal.</p>

    <div className="mt-8 flex gap-4">
      <a href={`tel:${phone}`} className="bg-black text-white px-6 py-3 rounded-xl">Call Now</a>
      <a href={`sms:${phone}`} className="border px-6 py-3 rounded-xl">Text for Quote</a>
    </div>

    <p className="mt-6 text-slate-500">Serving Baton Rouge and surrounding areas</p>
  </section>

  {/* TRUCK IMAGES */}
  <section className="px-6 pb-16">
    <h2 className="text-2xl font-bold text-center mb-8">Your Truck Ready to Work</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <img src="/truck1.jpg" className="rounded-xl shadow" />
      <img src="/truck2.jpg" className="rounded-xl shadow" />
      <img src="/truck3.jpg" className="rounded-xl shadow" />
    </div>
  </section>

  {/* SERVICES */}
  <section className="bg-slate-50 px-6 py-16">
    <h2 className="text-3xl font-bold text-center">Services</h2>
    <div className="grid md:grid-cols-4 gap-6 mt-10">
      {services.map((s) => (
        <div key={s.title} className="bg-white p-6 rounded-xl shadow">
          <div className="text-3xl">{s.icon}</div>
          <h3 className="text-xl font-bold mt-3">{s.title}</h3>
          <p className="text-slate-600 mt-2">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>

  {/* CONTACT */}
  <section className="px-6 py-16 text-center">
    <h2 className="text-3xl font-bold">Need something moved today?</h2>
    <p className="mt-4 text-slate-600">Call, text, or email for a fast quote.</p>

    <div className="mt-6 flex flex-col items-center gap-4">
      <a href={`tel:${phone}`} className="bg-black text-white px-8 py-4 rounded-xl">Call {phone}</a>
      <a href={`sms:${phone}`} className="border px-8 py-4 rounded-xl">Text {phone}</a>
      <a href={`mailto:${email}`} className="underline">{email}</a>
    </div>
  </section>

</div>



);
}

