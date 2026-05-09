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
    name: "Paneer Tikka Angara",
    description: "Cubes of cottage cheese marinated in spicy yogurt, char-grilled to perfection",
    price: 345,
    image: "/images/paneer-tikka.png",
    category: "starters",
    isPopular: true,
  },
  {
    id: "2",
    name: "Chicken Malai Tikka",
    description: "Creamy, melt-in-the-mouth chicken chunks marinated in cashew and cream",
    price: 425,
    image: "/images/steak.png",
    category: "starters",
    isNew: true,
  },
  {
    id: "3",
    name: "Lucknowi Galouti Kebab",
    description: "Traditional finely minced mutton kebabs served with Ulta Tawa Paratha",
    price: 495,
    image: "/images/hero-modern.png",
    category: "starters",
  },
  {
    id: "4",
    name: "Amritsari Machhi",
    description: "Crispy batter-fried fish fillets seasoned with carom seeds and lemon",
    price: 525,
    image: "/images/hero-modern.png",
    category: "starters",
  },
  {
    id: "5",
    name: "Signature Butter Chicken",
    description: "Tandoori chicken simmered in a velvety tomato and butter gravy",
    price: 545,
    image: "/images/butter-chicken.png",
    category: "main-course",
    isPopular: true,
  },
  {
    id: "6",
    name: "Dal Makhani Bhoj Special",
    description: "Black lentils slow-cooked overnight with cream and house spices",
    price: 395,
    image: "/images/hero-modern.png",
    category: "main-course",
  },
  {
    id: "7",
    name: "Hyderabadi Dum Biryani",
    description: "Long grain basmati rice cooked with aromatic spices and tender meat",
    price: 585,
    image: "/images/hero-modern.png",
    category: "main-course",
    isNew: true,
  },
  {
    id: "8",
    name: "Paneer Lababdar",
    description: "Soft paneer cubes in a rich, tangy onion-tomato gravy with capsicum",
    price: 465,
    image: "/images/hero-modern.png",
    category: "main-course",
  },
  {
    id: "9",
    name: "Royal Mango Lassi",
    description: "Thick yogurt drink blended with premium Alphonso mangoes",
    price: 185,
    image: "/images/mango-lassi.png",
    category: "drinks",
    isPopular: true,
  },
  {
    id: "10",
    name: "Masala Chai",
    description: "Strong Indian tea brewed with ginger, cardamom, and secret spices",
    price: 95,
    image: "/images/hero-modern.png",
    category: "drinks",
  },
  {
    id: "11",
    name: "Kesar Thandai",
    description: "Traditional refreshing milk drink with nuts and saffron",
    price: 165,
    image: "/images/hero-modern.png",
    category: "drinks",
    isNew: true,
  },
  {
    id: "12",
    name: "Fresh Nimbu Shikanji",
    description: "Traditional Indian lemonade with roasted cumin and black salt",
    price: 125,
    image: "/images/hero-modern.png",
    category: "drinks",
  },
  {
    id: "13",
    name: "Gulab Jamun with Rabri",
    description: "Hot milk dumplings served with cold, thickened sweetened milk",
    price: 225,
    image: "/images/gulab-jamun.png",
    category: "desserts",
    isPopular: true,
  },
  {
    id: "14",
    name: "Rasmalai Treasure",
    description: "Soft cheese patties soaked in saffron-infused milk",
    price: 195,
    image: "/images/hero-modern.png",
    category: "desserts",
  },
  {
    id: "15",
    name: "Moong Dal Halwa",
    description: "Rich, golden lentil dessert slow-cooked in pure desi ghee",
    price: 245,
    image: "/images/hero-modern.png",
    category: "desserts",
  },
  {
    id: "16",
    name: "Shahi Tukda",
    description: "Royal bread pudding with cardamom-infused milk and dry fruits",
    price: 215,
    image: "/images/hero-modern.png",
    category: "desserts",
    isNew: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Verma",
    role: "Food Enthusiast",
    text: "The Butter Chicken at Bhoj is absolute perfection. It takes me back to the authentic dhaba flavors but with a premium fine-dining touch.",
    rating: 5,
    avatar: "RV",
  },
  {
    id: "2",
    name: "Anjali Gupta",
    role: "Regular Guest",
    text: "Bhoj has become our go-to place for family dinners. The Dal Makhani is slow-cooked to perfection. Simply outstanding service!",
    rating: 5,
    avatar: "AG",
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Travel Blogger",
    text: "Finally found a place that respects the true essence of Indian spices. The ambiance is regal and the Shahi Tukda is a must-try.",
    rating: 5,
    avatar: "VS",
  },
  {
    id: "4",
    name: "Priya Sharma",
    role: "Event Planner",
    text: "Hosted my brother's engagement here. The catering and management were top-notch. Every guest raved about the Biryani!",
    rating: 5,
    avatar: "PS",
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
    { id: "1", name: "Rahul Verma", date: "Apr 2, 2026", time: "7:00 PM", guests: 4, status: "confirmed" as const },
    { id: "2", name: "Anjali Gupta", date: "Apr 2, 2026", time: "8:00 PM", guests: 2, status: "confirmed" as const },
    { id: "3", name: "Vikram Singh", date: "Apr 3, 2026", time: "6:30 PM", guests: 6, status: "pending" as const },
    { id: "4", name: "Priya Sharma", date: "Apr 3, 2026", time: "7:30 PM", guests: 8, status: "confirmed" as const },
    { id: "5", name: "Suresh Mehra", date: "Apr 4, 2026", time: "8:30 PM", guests: 3, status: "pending" as const },
    { id: "6", name: "Deepak Kumar", date: "Apr 4, 2026", time: "9:00 PM", guests: 2, status: "cancelled" as const },
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
