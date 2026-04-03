import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book your table at Ember & Oak. Choose your date, time, and number of guests for an unforgettable dining experience.",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
