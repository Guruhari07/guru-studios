import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Guru Studios",
  description: "Creative design studio portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#1344ad] via-[#0b8181] to-[#5c2c64] text-white scroll-smooth font-bold">
        {children}
      </body>
    </html>
  );
}
