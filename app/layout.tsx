import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Bhoj",
    default: "Bhoj | Authentic Indian Fine Dining",
  },
  description:
    "Experience the rich flavors of India at Bhoj. Premium Indian dining with traditional spices, tandoor specialties, and a royal atmosphere by Aditya Inn.",
  keywords: [
    "indian restaurant",
    "bhoj restaurant",
    "aditya inn",
    "fine dining india",
    "butter chicken",
    "biryani",
    "reservations",
  ],
  openGraph: {
    title: "Bhoj | Authentic Indian Fine Dining",
    description:
      "Experience the rich flavors of India at Bhoj. Premium Indian dining with traditional spices, tandoor specialties, and a royal atmosphere.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
