import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { ThemeProvider } from "@/app/providers/theme";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Fatih",
  authors: {
    name: "Muhammad Dadang Setiawan",
  },
  keywords: [
    "muslim app",
    "pengingat sholat",
    "pencari arah kiblat",
    "al-quran",
    "flutter",
    "developer",
    "ts",
    "nextjs",
    "tailwind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
