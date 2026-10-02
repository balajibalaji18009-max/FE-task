const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#inspiration" },
  { label: "Contact", href: "#footer" },
];

export const heroImage = u("photo-1586023492125-27b2c045efd7", 1600);

// `id` is matched against API product titles to filter the grid.
export const categories = [
  { id: "Chair", name: "Dining", image: u("photo-1617806118233-18e1de247200", 700) },
  { id: "Sofa", name: "Living", image: u("photo-1555041469-a586c61ea9bc", 700) },
  { id: "Bed", name: "Bedroom", image: u("photo-1505693416388-ac5ce068fe85", 700) },
];

export const filterOptions = ["All", "Sofa", "Bed", "Chair", "Table"];

export const slides = [
  { id: 1, label: "01 - Bed Room", title: "Inner Peace", image: u("photo-1505693416388-ac5ce068fe85", 900) },
  { id: 2, label: "02 - Living Room", title: "Warm Corners", image: u("photo-1493663284031-b7e3aefcae8e", 900) },
  { id: 3, label: "03 - Dining Room", title: "Gather Round", image: u("photo-1617806118233-18e1de247200", 900) },
];

export const gallery = [
  u("photo-1618220179428-22790b461013", 600),
  u("photo-1567538096630-e0c55bd6374c", 600),
  u("photo-1540574163026-643ea20ade25", 600),
  u("photo-1484101403633-562f891dc89a", 600),
  u("photo-1507473885765-e6ed057f782c", 600),
  u("photo-1555041469-a586c61ea9bc", 600),
];

export const features = [
  { id: 1, icon: "quality", title: "High Quality", text: "Crafted from top materials" },
  { id: 2, icon: "warranty", title: "Warranty Protection", text: "Over 2 years" },
  { id: 3, icon: "shipping", title: "Free Shipping", text: "Order over $150" },
  { id: 4, icon: "support", title: "24 / 7 Support", text: "Dedicated support" },
];

export const footerColumns = [
  { title: "Links", links: ["Home", "Shop", "About", "Contact"] },
  { title: "Help", links: ["Payment Options", "Returns", "Privacy Policies"] },
];
