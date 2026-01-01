import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeEdge Realty - Trusted Real Estate Services in Accra",
  description: "Helping buyers and investors find verified properties with confidence in Accra, Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

