import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Wrench, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
  const activeClass = 'text-white bg-blue-600/20';
  const inactiveClass = 'text-blue-100 hover:text-white hover:bg-blue-600/10';

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20">
              <Wrench size={20} />
            </div>
            <span className="font-semibold tracking-tight">Pulse Repair</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({isActive})=> `${linkBase} ${isActive?activeClass:inactiveClass}`}>Home</NavLink>
            <NavLink to="/services" className={({isActive})=> `${linkBase} ${isActive?activeClass:inactiveClass}`}>Services</NavLink>
            <NavLink to="/about" className={({isActive})=> `${linkBase} ${isActive?activeClass:inactiveClass}`}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> `${linkBase} ${isActive?activeClass:inactiveClass}`}>Contact</NavLink>
            <a href="tel:+1234567890" className="ml-3 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">
              <Phone size={16} /> Call Now
            </a>
          </div>

          <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-600/10 focus:outline-none">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            <NavLink onClick={()=>setOpen(false)} to="/" end className={({isActive})=> `${linkBase} block ${isActive?activeClass:inactiveClass}`}>Home</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/services" className={({isActive})=> `${linkBase} block ${isActive?activeClass:inactiveClass}`}>Services</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/about" className={({isActive})=> `${linkBase} block ${isActive?activeClass:inactiveClass}`}>About</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/contact" className={({isActive})=> `${linkBase} block ${isActive?activeClass:inactiveClass}`}>Contact</NavLink>
            <a href="tel:+1234567890" className="block mt-2 w-full text-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors">Call Now</a>
          </div>
        )}
      </nav>
    </header>
  );
}
