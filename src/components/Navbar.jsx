import { useEffect, useState } from "react";
import { FiUser, FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { FaCouch } from "react-icons/fa";
import { navLinks } from "../data/data";

const iconButtons = [
  { label: "Account", Icon: FiUser },
  { label: "Search", Icon: FiSearch },
  { label: "Wishlist", Icon: FiHeart },
];

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? "shadow-md" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
          <FaCouch className="text-gold" /> Furniro
        </a>

        <ul className="hidden items-center gap-12 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-medium hover:text-gold">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-3">
          {iconButtons.map(({ label, Icon }) => (
            <button key={label} aria-label={label} className="hidden rounded-full p-2 hover:text-gold sm:block">
              <Icon size={22} />
            </button>
          ))}
          <button aria-label={`Cart, ${cartCount} items`} className="relative rounded-full p-2 hover:text-gold">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 md:hidden"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-gray-100 bg-white px-5 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
