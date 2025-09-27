import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";



export const metadata: Metadata = {
  title: "Kingswrld",
  description: "This is Kingswrld amazing portfolio full of great possibilites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-inter antialiased text-slate-300 `}
      >
        <ThemeProvider
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
