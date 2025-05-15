import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "CTRL - Reclaim Your Feed",
  description: "Take back control from trends, tech, and digital burnout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased ${permanentMarker.variable}`}>{children}</body>
    </html>
  );
}
