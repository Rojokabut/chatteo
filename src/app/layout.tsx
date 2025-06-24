import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Chatteo",
  description: "Created by Rojo Niaina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
