import { Link } from 'react-router-dom';

export function ShopPage() {
  return (
    <section className="section-shell">
      <p className="text-xs uppercase tracking-[0.3em] text-sand">Shop</p>
      <h1 className="mt-3 font-display text-5xl">Collection</h1>
      <p className="mt-4 max-w-2xl text-frost/75">Discover premium oversized silhouettes designed for everyday confidence.</p>
      <div className="mt-8"><Link to="/" className="underline text-sand">Back to featured edits</Link></div>
    </section>
  );
}

export function LookbookPage() {
  return <CenterPage title="Lookbook" text="Campaign visuals and seasonal stories curated for modern street luxury." />;
}
export function AboutPage() {
  return <CenterPage title="About Merakiind" text="We build intentional clothing with soul, precision and global streetwear perspective." />;
}
export function TrackOrderPage() {
  return (
    <section className="section-shell max-w-2xl">
      <h1 className="font-display text-5xl">Track Order</h1>
      <p className="mt-4 text-frost/70">Enter your order ID and email to track your shipment.</p>
      <div className="mt-8 space-y-3">
        <input placeholder="Order ID" className="w-full rounded-xl border border-white/20 bg-smoke p-3" />
        <input placeholder="Email" className="w-full rounded-xl border border-white/20 bg-smoke p-3" />
        <button className="rounded-full bg-frost px-6 py-3 text-black">Track</button>
      </div>
    </section>
  );
}

export function ContactPage() {
  return <CenterPage title="Contact" text="For collaborations, support and global retail inquiries reach us at hello@merakiind.com." />;
}

export function AuthPage({ mode }) {
  const isLogin = mode === 'login';
  return (
    <section className="section-shell max-w-xl">
      <h1 className="font-display text-5xl">{isLogin ? 'Login' : 'Create Account'}</h1>
      <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-smoke p-6">
        {!isLogin && <input placeholder="Full Name" className="w-full rounded-xl border border-white/20 bg-black p-3" />}
        <input placeholder="Email" className="w-full rounded-xl border border-white/20 bg-black p-3" />
        <input type="password" placeholder="Password" className="w-full rounded-xl border border-white/20 bg-black p-3" />
        <button className="w-full rounded-full bg-frost py-3 text-black">{isLogin ? 'Login' : 'Sign Up'}</button>
      </div>
    </section>
  );
}

export function WishlistPage() {
  return <CenterPage title="Wishlist" text="Save pieces you love. Your curated list appears here." />;
}

export function CartPage() {
  return (
    <section className="section-shell">
      <h1 className="font-display text-5xl">Cart</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-2xl border border-white/10 bg-smoke p-6">Your selected products will appear here in demo mode.</div>
        <aside className="space-y-3 rounded-2xl border border-white/10 bg-smoke p-6">
          <h3 className="text-lg">Coupon</h3>
          <input placeholder="Enter coupon code" className="w-full rounded-xl border border-white/20 bg-black p-3" />
          <button className="w-full rounded-full border border-white/30 py-3">Apply</button>
          <Link to="/checkout" className="block w-full rounded-full bg-frost py-3 text-center text-black">Proceed to Checkout</Link>
        </aside>
      </div>
    </section>
  );
}

export function CheckoutPage() {
  return <CenterPage title="Checkout" text="Secure checkout UI ready for payment gateway integration." />;
}

function CenterPage({ title, text }) {
  return (
    <section className="section-shell text-center">
      <h1 className="font-display text-5xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-2xl text-frost/70">{text}</p>
    </section>
  );
}
