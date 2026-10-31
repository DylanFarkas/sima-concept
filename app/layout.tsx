import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "700"],
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "sima.co – SIMA",
  description: "Equipamos a personas que eligen crecer cada día.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
