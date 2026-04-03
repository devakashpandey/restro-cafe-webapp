import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Ember & Oak — our passion for culinary excellence, our team, and the values that drive every dish.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
