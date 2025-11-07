import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Sujit Neupane",
  description: "Portfolio",
  icons: {
    icon: "/sujit.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased bg-white transition-colors dark:bg-bg dark:text-white`}
      >
        <ThemeProvider>
          <Navbar />
          <main className=" min-h-screen pt-24 ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
