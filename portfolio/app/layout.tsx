import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/nav/Nav";
import { DevModeProvider } from "@/components/DevModeContext";
import "./globals.css";

// ─── Cabinet Grotesk ──────────────────────────────────────────────────────────
// Display font. Locked to next/font/local — not available via next/font/google.
// Weights 700 (Bold) and 800 (ExtraBold) only — used for display/headings.
// ─────────────────────────────────────────────────────────────────────────────
const cabinetGrotesk = localFont({
  src: [
    {
      path: "./fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
  preload: true,
});

// ─── Outfit ───────────────────────────────────────────────────────────────────
// Body / UI font. Clean, geometric, legible at small sizes.
// ─────────────────────────────────────────────────────────────────────────────
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500"],
});

// ─── JetBrains Mono ───────────────────────────────────────────────────────────
// Monospace — used for labels, role text, metadata lines.
// ─────────────────────────────────────────────────────────────────────────────
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Aditi Prajapati — Software Developer",
  description:
    "Portfolio of Aditi Prajapati, a software developer building thoughtful web experiences and exploring systems.",
  metadataBase: new URL("https://aditiprajapati.dev"),
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    cabinetGrotesk.variable,
    outfit.variable,
    jetbrainsMono.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>
        <DevModeProvider>
          {/* Skip to content — first focusable element for keyboard / screen reader users */}
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Nav />
          <main id="main-content">{children}</main>
        </DevModeProvider>
      </body>
    </html>
  );
}
