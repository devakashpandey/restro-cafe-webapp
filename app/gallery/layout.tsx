import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the visual world of Ember & Oak — stunning food photography, elegant interiors, and memorable moments.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
