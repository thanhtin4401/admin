import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Propins:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <body>{children}</body>
    </html>
  );
}
