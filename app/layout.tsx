import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gringa",
  description: "Rifas y sorteos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-25..0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
