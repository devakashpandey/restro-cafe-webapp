export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "starters" | "main-course" | "drinks" | "desserts";
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "food" | "interior" | "events" | "team";
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: Date | undefined;
  time: string;
  guests: string;
  specialRequests: string;
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Arancini",
    description: "Crispy risotto balls with black truffle, served with saffron aioli",
    price: 18,
    image: "/images/pasta.png",
    category: "starters",
    isPopular: true,
  },
  {
    id: "2",
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna with avocado mousse, sesame, and citrus ponzu",
    price: 22,
    image: "/images/salad.png",
    category: "starters",
    isNew: true,
  },
  {
    id: "3",
    name: "Caesar Royale",
    description: "Grilled chicken, aged parmesan, croutons, and our signature anchovy dressing",
    price: 16,
    image: "/images/salad.png",
    category: "starters",
  },
  {
    id: "4",
    name: "Burrata & Heirloom Tomato",
    description: "Creamy burrata with roasted heirloom tomatoes, basil oil, and balsamic glaze",
    price: 19,
    image: "/images/salad.png",
    category: "starters",
  },
  {
    id: "5",
    name: "Wagyu Ribeye",
    description: "12oz A5 wagyu with bone marrow butter, truffle jus, and roasted garlic",
    price: 68,
    image: "/images/steak.png",
    category: "main-course",
    isPopular: true,
  },
  {
    id: "6",
    name: "Truffle Tagliatelle",
    description: "Handmade pasta with wild mushrooms, black truffle, and aged pecorino",
    price: 34,
    image: "/images/pasta.png",
    category: "main-course",
  },
  {
    id: "7",
    name: "Pan-Seared Sea Bass",
    description: "Wild-caught sea bass with fennel purée, cherry tomatoes, and olive tapenade",
    price: 42,
    image: "/images/salad.png",
    category: "main-course",
    isNew: true,
  },
  {
    id: "8",
    name: "Lamb Rack",
    description: "Herb-crusted lamb with rosemary jus, roasted vegetables, and mint gremolata",
    price: 52,
    image: "/images/steak.png",
    category: "main-course",
  },
  {
    id: "9",
    name: "Smoky Old Fashioned",
    description: "Bourbon, smoked maple syrup, bitters, and a torched orange peel",
    price: 16,
    image: "/images/cocktail.png",
    category: "drinks",
    isPopular: true,
  },
  {
    id: "10",
    name: "Rosemary Gimlet",
    description: "Gin, fresh lime, rosemary-infused syrup, and elderflower",
    price: 15,
    image: "/images/cocktail.png",
    category: "drinks",
  },
  {
    id: "11",
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur, and vanilla bean",
    price: 17,
    image: "/images/cocktail.png",
    category: "drinks",
    isNew: true,
  },
  {
    id: "12",
    name: "Lavender Collins",
    description: "Gin, lavender syrup, fresh lemon, and soda with dried lavender garnish",
    price: 14,
    image: "/images/cocktail.png",
    category: "drinks",
  },
  {
    id: "13",
    name: "Chocolate Lava Cake",
    description: "Warm Valrhona chocolate cake with molten center, vanilla gelato, and gold leaf",
    price: 16,
    image: "/images/dessert.png",
    category: "desserts",
    isPopular: true,
  },
  {
    id: "14",
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with a caramelized sugar crust",
    price: 14,
    image: "/images/dessert.png",
    category: "desserts",
  },
  {
    id: "15",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers with mascarpone cream and cocoa dust",
    price: 15,
    image: "/images/dessert.png",
    category: "desserts",
  },
  {
    id: "16",
    name: "Pistachio Panna Cotta",
    description: "Silky pistachio panna cotta with berry compote and candied pistachios",
    price: 14,
    image: "/images/dessert.png",
    category: "desserts",
    isNew: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophia Chen",
    role: "Food Critic, The Chronicle",
    text: "An extraordinary dining experience. The Wagyu ribeye was hands down the best I've had in the city. The ambiance perfectly complements the culinary artistry.",
    rating: 5,
    avatar: "SC",
  },
  {
    id: "2",
    name: "James Rodriguez",
    role: "Regular Guest",
    text: "We celebrate every anniversary here. The staff remembers our preferences, and every visit feels special. The truffle tagliatelle is our absolute favorite.",
    rating: 5,
    avatar: "JR",
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Lifestyle Blogger",
    text: "From the moment you walk in, every detail is curated to perfection. The cocktail menu is innovative, and the desserts are pure artistry. A must-visit.",
    rating: 5,
    avatar: "EW",
  },
  {
    id: "4",
    name: "Michael Park",
    role: "Corporate Events Manager",
    text: "We hosted our company gala here and it was flawless. The private dining space, customized menu, and impeccable service exceeded all expectations.",
    rating: 5,
    avatar: "MP",
  },
];

export const timeSlots: TimeSlot[] = [
  { id: "1", time: "11:00 AM", available: true },
  { id: "2", time: "11:30 AM", available: true },
  { id: "3", time: "12:00 PM", available: true },
  { id: "4", time: "12:30 PM", available: false },
  { id: "5", time: "1:00 PM", available: true },
  { id: "6", time: "1:30 PM", available: true },
  { id: "7", time: "5:00 PM", available: true },
  { id: "8", time: "5:30 PM", available: true },
  { id: "9", time: "6:00 PM", available: false },
  { id: "10", time: "6:30 PM", available: true },
  { id: "11", time: "7:00 PM", available: true },
  { id: "12", time: "7:30 PM", available: true },
  { id: "13", time: "8:00 PM", available: true },
  { id: "14", time: "8:30 PM", available: false },
  { id: "15", time: "9:00 PM", available: true },
  { id: "16", time: "9:30 PM", available: true },
];

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/images/hero.png", alt: "Premium dining table setup", category: "interior" },
  { id: "2", src: "/images/steak.png", alt: "Wagyu ribeye steak", category: "food" },
  { id: "3", src: "/images/interior.png", alt: "Restaurant interior ambiance", category: "interior" },
  { id: "4", src: "/images/pasta.png", alt: "Truffle tagliatelle", category: "food" },
  { id: "5", src: "/images/cocktail.png", alt: "Artisan cocktail", category: "food" },
  { id: "6", src: "/images/dessert.png", alt: "Chocolate lava cake", category: "food" },
  { id: "7", src: "/images/salad.png", alt: "Gourmet Caesar salad", category: "food" },
  { id: "8", src: "/images/chef.png", alt: "Executive chef", category: "team" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/booking", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const adminStats = {
  totalBookings: 1247,
  totalCustomers: 892,
  avgRating: 4.9,
  revenue: 184500,
  recentReservations: [
    { id: "1", name: "Sophia Chen", date: "Apr 2, 2026", time: "7:00 PM", guests: 4, status: "confirmed" as const },
    { id: "2", name: "James Rodriguez", date: "Apr 2, 2026", time: "8:00 PM", guests: 2, status: "confirmed" as const },
    { id: "3", name: "Emily Watson", date: "Apr 3, 2026", time: "6:30 PM", guests: 6, status: "pending" as const },
    { id: "4", name: "Michael Park", date: "Apr 3, 2026", time: "7:30 PM", guests: 8, status: "confirmed" as const },
    { id: "5", name: "Lisa Thompson", date: "Apr 4, 2026", time: "8:30 PM", guests: 3, status: "pending" as const },
    { id: "6", name: "David Kim", date: "Apr 4, 2026", time: "9:00 PM", guests: 2, status: "cancelled" as const },
  ],
  monthlyBookings: [
    { month: "Oct", count: 156 },
    { month: "Nov", count: 189 },
    { month: "Dec", count: 234 },
    { month: "Jan", count: 198 },
    { month: "Feb", count: 212 },
    { month: "Mar", count: 258 },
  ],
};
