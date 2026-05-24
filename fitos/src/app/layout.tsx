import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitOS",
  description: "Unified fitness intelligence dashboard",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
