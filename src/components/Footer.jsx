import { useState } from "react";
import { footerColumns } from "../data/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <footer id="footer" className="border-t border-gray-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="text-2xl font-bold">Furniro</p>
          <address className="mt-6 max-w-xs not-italic text-muted">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </address>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="font-medium text-muted">{col.title}</h3>
            <ul className="mt-6 space-y-5 font-medium">
              {col.links.map((l) => (
                <li key={l}><a href="#home" className="hover:text-gold">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-medium text-muted">Newsletter</h3>
          {sent ? (
            <p className="mt-6 font-medium text-gold">Thank you. You are subscribed.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-wrap gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 flex-1 border-b border-ink bg-transparent py-1 outline-none"
              />
              <button className="border-b border-ink pb-1 font-medium hover:text-gold">SUBSCRIBE</button>
            </form>
          )}
        </div>
      </div>
      <p className="mx-auto max-w-7xl border-t border-gray-200 px-5 py-6 lg:px-10">
        © {new Date().getFullYear()} Furniro. All rights reserved.
      </p>
    </footer>
  );
}
