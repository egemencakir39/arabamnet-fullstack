import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <main>{children}
          <Toaster position="top-right" reverseOrder={false} />
        </main>
      </body>
    </html>
  );
}
