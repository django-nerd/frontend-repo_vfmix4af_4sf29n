import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-200 backdrop-blur">
            Fast, reliable & eco-friendly repairs
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Bring your tech back to life
          </h1>
          <p className="mt-4 text-blue-200/90 max-w-xl">
            We repair phones, laptops, tablets, game consoles and more. Transparent pricing, premium parts, and same-day turnarounds.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#services" className="rounded-lg bg-blue-600 px-5 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition">View Services</a>
            <a href="tel:+1234567890" className="rounded-lg border border-white/10 px-5 py-3 text-blue-100 hover:bg-white/10 transition">Call for a quick quote</a>
          </div>
          <div className="mt-6 text-xs text-blue-200/70">
            Premium parts • 6–12 month warranty • No fix, no fee
          </div>
        </motion.div>
      </div>
    </section>
  );
}
