import React from 'react';
import Navbar from "./components/Navbar";

import "./globals.css"; //
const Myfunction = () => {}
export const metadata = {
  title: "My Website",
  viewport: "width=device-width, initial-scale=1",
};
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
