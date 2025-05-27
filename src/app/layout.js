// app/layout.js yoki layout.tsx
import "./globals.css";
import { Inter, Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["system-ui", "sans-serif"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Bunyod House | Xorazm, Urganch",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/site.webmanifest",
  keywords: "Bunyod House, uylar, uy sotib olish, uy qurish, arzon uylar",
  authors: [
    {
      name: "Bunyod House",
      url: "https://bunyodhouse.uz",
    },
  ],
  creator: "Bunyod House",
  publisher: "Bunyod House",
  description:
    "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi. Bizning uylarimiz zamonaviy dizayni va sifatli materiallari bilan ajralib turadi. Biz mijozlarimizga eng yaxshi xizmatni taqdim etishga intilamiz.",
  openGraph: {
    title: "Bunyod House | Xorazm, Urganch",
    description:
      "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi...",
    url: "https://bunyodhouse.uz",
    siteName: "Bunyod House",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunyod House | Xorazm, Urganch",
    description:
      "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi...",
    images: ["/logo.svg"],
    creator: "@bunyodhouse",
  },
  alternates: {
    en: "https://bunyodhouse.uz",
    uz: "https://bunyodhouse.uz",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
