import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { UserProvider } from "@/lib/user-context";
import { PERSPECTIVE_CONFIG } from "@/lib/perspective";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyHealthGPT - Your AI Wellness Companion at Work",
  description: "AI-powered workplace wellness app for burnout prevention, stress management, and work-life balance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <Navigation />
            {children}
          </UserProvider>
        </ThemeProvider>
        <Script src={PERSPECTIVE_CONFIG.scriptUrl} strategy="lazyOnload" />
      </body>
    </html>
  );
}
