import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "The Big Day - Undangan Nikah Digital",
  description: "Undangan Nikah Digital",
  openGraph: {
    title: "The Big Day - Undangan Nikah Digital",
    description: "Undangan Nikah Digital",
    url: "https://thebigday.id",
    siteName: "The Big Day",
    images: [
      {
        url: "ttps://thebigday.id/og-image.png", // must be absolute URL
        width: 1200,
        height: 630,
        alt: "The Big Day preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Big Day - Undangan Nikah Digital",
    description: "Undangan Nikah Digital",
    images: ["ttps://thebigday.id/og-image.png"], // must be absolute URL
  },
};

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
