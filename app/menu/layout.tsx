import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our curated menu of signature dishes, handcrafted cocktails, and exquisite desserts at Ember & Oak.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
