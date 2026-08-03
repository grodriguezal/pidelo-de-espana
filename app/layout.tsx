import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ variable: "--font-brand", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pídelo de España | Compras de España a Caracas",
  description: "Recibimos, consolidamos y preparamos tus compras en España para su entrega puerta a puerta en Caracas.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Pídelo de España",
    description: "Compra en España. Recíbelo en Caracas.",
    images: [{ url: "/og.jpg", width: 1200, height: 672, alt: "Pídelo de España" }],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pídelo de España",
    description: "Compra en España. Recíbelo en Caracas.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={nunito.variable}>{children}</body></html>;
}
