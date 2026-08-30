import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditi Prajapati — Software & Web Developer",
  description:
    "Portfolio of Aditi Prajapati — B.Sc. IT Student, Software Developer, and Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
