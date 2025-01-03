import React from "react";
import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "src/components/Navbar/Navbar";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSerif.className}`}>
        <Navbar />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "36px 0",
          }}
        >
          <div style={{ width: "960px", height: "100%" }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
