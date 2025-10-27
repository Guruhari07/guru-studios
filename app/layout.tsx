import "./globals.css";

export const metadata = {
  title: "Guru Studios",
  description: "Creative agency making digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#1344ad] via-[#0b8181] to-[#5c2c64] text-white scroll-smooth font-bold">
        {children}
      </body>
    </html>
  );
}
