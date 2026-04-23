import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyLens | See Smarter with AI Vision",
  description: "AI-powered vision that understands your world in real-time. Experience real-time object detection and intelligent insights.",
  keywords: ["AI", "Computer Vision", "Object Detection", "Accessibility", "Mobile App"],
  icons: {
    icon: "/images/icons/app_icon_logo.png",
    apple: "/images/icons/app_icon_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navigation />
          <main className="flex flex-col flex-grow">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
