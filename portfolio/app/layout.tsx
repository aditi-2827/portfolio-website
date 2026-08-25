import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/nav/Nav";
import "./globals.css";

// ─── Playfair Display ─────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

// ─── DM Sans ──────────────────────────────────────────────────
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["200", "300", "400", "500"],
});

// ─── JetBrains Mono ───────────────────────────────────────────
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Aditi Prajapati — Developer",
  description:
    "Portfolio of Aditi Prajapati — building fast, intentional web experiences.",
  metadataBase: new URL("https://aditiprajapati.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    playfair.variable,
    dmSans.variable,
    jetbrainsMono.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
