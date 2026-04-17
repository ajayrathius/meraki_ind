import { Link, NavLink } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/lookbook', 'Lookbook'],
  ['/about', 'About'],
  ['/track-order', 'Track Order'],
  ['/contact', 'Contact']
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-carbon">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-carbon/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-[min(1280px,95%)] items-center justify-between py-4">
          <Link to="/" className="font-display text-xl tracking-[0.24em]">MERAKIIND</Link>
          <div className="hidden gap-6 md:flex">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.15em] transition ${isActive ? 'text-sand' : 'text-frost/80 hover:text-frost'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Link to="/cart" className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.12em] hover:border-sand">Cart</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-black">
        <div className="section-shell grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-[0.2em]">MERAKIIND</p>
            <p className="mt-3 text-sm text-frost/70">Luxury streetwear crafted for those who lead quietly.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-frost/80">
            {['About', 'Contact', 'Shipping', 'Returns', 'Privacy', 'Terms'].map((item) => (
              <a key={item} href="#" className="hover:text-sand">{item}</a>
            ))}
          </div>
          <div className="flex items-start gap-4">
            <a href="#" className="rounded-full border border-white/20 p-3 hover:border-sand"><Instagram size={18} /></a>
            <a href="#" className="rounded-full border border-white/20 p-3 hover:border-sand"><MessageCircle size={18} /></a>
          </div>
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="pb-8 text-center text-xs text-frost/50">
          © {new Date().getFullYear()} Merakiind. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
