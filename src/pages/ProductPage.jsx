import { Heart, Minus, Plus, Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data';

export default function ProductPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === id) ?? products[0], [id]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('M');

  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          {[product.image, ...products.slice(0, 3).map((p) => p.image)].map((img, i) => (
            <img key={i} src={img} alt={product.name} className="h-60 w-full rounded-xl object-cover md:h-80" />
          ))}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sand">{product.price}</p>
          <h1 className="mt-2 font-display text-5xl">{product.name}</h1>
          <p className="mt-4 max-w-xl text-frost/70">Crafted in premium heavyweight cotton with a precision oversized silhouette and minimal signature detailing.</p>

          <div className="mt-6">
            <p className="mb-2 text-sm uppercase tracking-[0.14em]">Size</p>
            <div className="flex gap-2">{['S', 'M', 'L', 'XL'].map((s) => <button key={s} onClick={() => setSize(s)} className={`rounded-full border px-4 py-2 ${size === s ? 'border-sand text-sand' : 'border-white/30'}`}>{s}</button>)}</div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-white/30">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-2"><Minus size={16} /></button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-2"><Plus size={16} /></button>
            </div>
            <button className="rounded-full border border-white/30 p-3"><Heart size={18} /></button>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-full bg-frost px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black">Add to Cart (Demo)</button>
            <Link to="/checkout" className="rounded-full border border-white/30 px-7 py-3 text-sm uppercase tracking-[0.12em]">Buy Now</Link>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-smoke p-5">
            <h3 className="font-display text-2xl">Reviews</h3>
            <div className="mt-3 flex items-center gap-2 text-sand">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}<span className="text-frost/70">4.9 / 5 (128 reviews)</span></div>
            <textarea placeholder="Write your review" className="mt-4 h-24 w-full rounded-xl border border-white/20 bg-black p-3" />
            <button className="mt-3 rounded-full border border-white/30 px-5 py-2 text-sm">Submit Review</button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-4xl">Related Products</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {products.slice(0, 3).map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="rounded-2xl border border-white/10 bg-smoke p-3">
              <img src={item.image} alt={item.name} className="h-56 w-full rounded-xl object-cover" />
              <p className="mt-3 text-sm text-sand">{item.price}</p>
              <p className="font-display text-xl">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
