import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Shared/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber />
        {children}
        </body>
    </html>
  );
}
