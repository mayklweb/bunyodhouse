import "./globals.css";
import { Geist, Geist_Mono, Aboreto, Belleza } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aboreto = Aboreto({
  weight: "400",
  variable: "--font-aboreto-sans",
  subsets: ["latin"],
});

const belleza = Belleza({
  variable: "--font-belleza-sans",
  weight: "400",
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
      "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi. Bizning uylarimiz zamonaviy dizayni va sifatli materiallari bilan ajralib turadi. Biz mijozlarimizga eng yaxshi xizmatni taqdim etishga intilamiz.",
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
      "Bunyod House - Xorazm viloyatida arzon va sifatli uylar qurish bilan shug'ullanadi. Bizning uylarimiz zamonaviy dizayni va sifatli materiallari bilan ajralib turadi. Biz mijozlarimizga eng yaxshi xizmatni taqdim etishga intilamiz.",
    images: ["/logo.svg"],
    creator: "@bunyodhouse",
  },
  alternates: {
    en: "https://bunyodhouse.uz",
    uz: "https://bunyodhouse.uz",
  },
  verification: {
    google: "google-site-verification=your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${aboreto.variable} ${geistMono.variable} ${geistSans.variable} ${belleza.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
