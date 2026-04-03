import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ember & Oak",
    default: "Ember & Oak | Premium Dining Experience",
  },
  description:
    "Experience culinary artistry at Ember & Oak. Premium dining with handcrafted cocktails, farm-to-table ingredients, and an unforgettable atmosphere. Book your table today.",
  keywords: [
    "fine dining",
    "restaurant",
    "premium dining",
    "craft cocktails",
    "reservations",
    "gourmet food",
  ],
  openGraph: {
    title: "Ember & Oak | Premium Dining Experience",
    description:
      "Experience culinary artistry at Ember & Oak. Premium dining with handcrafted cocktails, farm-to-table ingredients, and an unforgettable atmosphere.",
    type: "website",
    locale: "en_US",
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
      className={`${lato.variable} h-full antialiased`}
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
