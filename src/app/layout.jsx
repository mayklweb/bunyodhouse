import "./globals.css";
import { Aboreto, Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin-ext", "latin"],
  variable: "--font-aboreto",
});

export const metadata = {
  metadataBase: new URL('https://www.bunyodhouse.uz'),
  title: "Bunyod House | Xorazm, Urganch",
  description: "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi. Bizning uylarimiz zamonaviy dizayni va sifatli materiallari bilan ajralib turadi. Biz mijozlarimizga eng yaxshi xizmatni taqdim etishga intilamiz.",
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
  creator: "МАЙКЛ",
  publisher: "МАЙКЛ",
  openGraph: {
    title: "Bunyod House | Xorazm, Urganch",
    description:
      "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi...",
    url: "https://bunyodhouse.uz",
    siteName: "Bunyod House",
    images: [
      {
        url: "/favicon.iso",
        width: 800,
        height: 600,
      },
    ],
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
    <html lang="en" className={`${roboto.variable} ${aboreto.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
