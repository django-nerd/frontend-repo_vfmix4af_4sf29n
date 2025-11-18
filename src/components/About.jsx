export default function About() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_0%_0%,rgba(59,130,246,0.08),transparent_60%),radial-gradient(700px_300px_at_100%_0%,rgba(8,145,178,0.08),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Us</h2>
        <p className="mt-4 text-blue-200/85">
          We’re a team of certified technicians with a passion for making tech last longer. From cracked screens to logic board repairs, we’ve seen it all and fixed most of it. Our approach blends precision, transparency, and friendly service.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-blue-200/80">Devices repaired</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-blue-200/80">Average rating</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-3xl font-bold text-white">12 mo</div>
            <div className="text-blue-200/80">Warranty on parts</div>
          </div>
        </div>
      </div>
    </section>
  );
}
