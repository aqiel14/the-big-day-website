import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "The Big Day - Undangan Nikah Digital",
  description: "Undangan Nikah Digital",
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
