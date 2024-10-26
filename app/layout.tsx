import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header.tsx";
import AnimateLoader from "@/components/AnimateLoader";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Sandeep Sharma Portfolio",
  description: "Portfolio of Sandeep Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} container mx-auto`}>
        <Header />
        <AnimateLoader>{children}</AnimateLoader>
        <StairTransition />
        <Toaster />
      </body>
    </html>
  );
}
