import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Shirt, Globe2, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { instaImages, lookbookImages, products, testimonials } from '../data';

const whyItems = [
  { icon: Shirt, title: 'Premium Fabric' },
  { icon: Ruler, title: 'Oversized Perfect Fit' },
  { icon: Sparkles, title: 'Minimal Luxury Design' },
  { icon: Globe2, title: 'Global Streetwear Energy' },
  { icon: ShieldCheck, title: 'Made for Everyday Confidence' },
  { icon: Users, title: 'Unisex Styles' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const [activeReview, setActiveReview] = useState(0);
  const review = useMemo(() => testimonials[activeReview], [activeReview]);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80" alt="Merakiind hero" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
        <div className="relative mx-auto flex min-h-screen w-[min(1200px,92%)] flex-col justify-center">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="mb-4 text-xs uppercase tracking-[0.3em] text-sand">Luxury Streetwear / Oversized Essentials</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }} className="max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">Wear Intent. Move Different.</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-lg text-frost/80">Luxury streetwear crafted for those who lead quietly.</motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="mt-10 flex gap-4">
            <Link to="/shop" className="rounded-full bg-frost px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-sand">Shop Collection</Link>
            <Link to="/about" className="rounded-full border border-frost/40 px-7 py-3 text-sm uppercase tracking-[0.12em] hover:border-sand">Explore Brand</Link>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="font-display text-4xl md:text-5xl">Featured Collection</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, i) => (
            <motion.article key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.05 }} className="card-hover overflow-hidden rounded-2xl border border-white/10 bg-smoke">
              <div className="overflow-hidden"><img src={product.image} alt={product.name} className="h-80 w-full object-cover transition duration-700 hover:scale-105" /></div>
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-sand">{product.price}</p>
                <h3 className="font-display text-2xl">{product.name}</h3>
                <p className="text-sm text-frost/65">{product.tones}</p>
                <Link to={`/product/${product.id}`} className="inline-flex rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.14em] hover:border-sand">Quick View</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grain border-y border-white/10 bg-black">
        <div className="section-shell">
          <h2 className="font-display text-4xl">Built with Meraki.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-frost/80">Merakiind was born for creators, movers and originals. Every thread reflects intention, discipline and identity. We design clean silhouettes with street energy and luxury standards.</p>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="font-display text-4xl">Why Merakiind</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-smoke p-6">
              <Icon className="text-sand" />
              <p className="mt-3 text-lg">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="font-display text-4xl">Lookbook</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {lookbookImages.map((img, idx) => (
            <img key={img} src={img} alt={`Lookbook ${idx + 1}`} className="h-96 w-full rounded-2xl object-cover transition hover:scale-[1.02]" />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-smoke">
        <div className="section-shell text-center">
          <h2 className="font-display text-4xl">Customer Reviews</h2>
          <motion.blockquote key={review.author} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto mt-8 max-w-3xl text-2xl leading-relaxed">“{review.quote}”</motion.blockquote>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-sand">{review.author}</p>
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setActiveReview(idx)} className={`h-2 w-10 rounded-full ${idx === activeReview ? 'bg-sand' : 'bg-white/20'}`} aria-label={`show review ${idx + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="font-display text-4xl">Oversized Size Guide</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-sand">
              <tr><th className="p-4">Size</th><th className="p-4">Chest</th><th className="p-4">Length</th><th className="p-4">Fit Mood</th></tr>
            </thead>
            <tbody>
              {[
                ['S', '42"', '27"', 'Relaxed'],
                ['M', '44"', '28"', 'Signature Oversized'],
                ['L', '46"', '29"', 'Boxy Street'],
                ['XL', '48"', '30"', 'Heavy Drop']
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/10">{row.map((cell) => <td key={cell} className="p-4 text-frost/80">{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-shell grid gap-8 rounded-3xl border border-white/10 bg-smoke p-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sand">Newsletter</p>
          <h2 className="mt-3 font-display text-4xl">Join The Drop List</h2>
        </div>
        <form className="flex gap-3">
          <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-white/20 bg-black px-5 py-3 outline-none focus:border-sand" />
          <button className="rounded-full bg-frost px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black">Join</button>
        </form>
      </section>

      <section className="section-shell">
        <h2 className="font-display text-4xl">Instagram</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
          {instaImages.map((img, idx) => <img key={idx} src={img} alt={`Instagram ${idx + 1}`} className="aspect-square w-full rounded-xl object-cover" />)}
        </div>
      </section>
    </>
  );
}
