import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commonwealth Bank",
  description:
    "Commonwealth Bank, a wholly owned subsidiary of R. W. Radwill & Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
