import { Wrench, Smartphone, Monitor, Gamepad2, Laptop, BatteryCharging, ShieldCheck, Truck } from 'lucide-react';

const items = [
  { icon: Smartphone, title: 'Phone Repair', desc: 'Screens, batteries, charging ports, water damage and more.' },
  { icon: Laptop, title: 'Laptop Repair', desc: 'Hardware upgrades, keyboard, SSDs, OS repair & optimization.' },
  { icon: Monitor, title: 'Tablet Repair', desc: 'Screen replacements, connectors, battery swaps & more.' },
  { icon: Gamepad2, title: 'Console Repair', desc: 'HDMI ports, overheating, laser & drive issues for major consoles.' },
  { icon: BatteryCharging, title: 'Battery Swap', desc: 'High‑quality cells with extended warranty and proper calibration.' },
  { icon: ShieldCheck, title: 'Data & Security', desc: 'Data recovery, backups, device setup, malware removal.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(37,99,235,0.15),transparent_50%),radial-gradient(600px_circle_at_80%_10%,rgba(8,145,178,0.15),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Services</h2>
            <p className="mt-2 text-blue-200/80 max-w-2xl">We cover most consumer electronics with fast diagnostics and clear pricing.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-blue-200">
            <Truck className="text-cyan-400" size={18} /> Free pickup & delivery within 5 miles
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition shadow-lg shadow-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/80">{desc}</p>
              <button className="mt-4 text-sm text-blue-300 hover:text-white">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
