import React from 'react';
import Navbar from "./components/Navbar";

import "./globals.css"; //
const Myfunction = () => {}
export const metadata = {
  title: "My Website",
};
export const viewport = { "width=device-width, initial-Scale": 1,
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
      {/* Floating Contact Buttons */}
<div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
  <a
    href="https://wa.me/923001234567"
    target="_blank"
    className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg text-lg"
  >
    💬
  </a>

  <a
    href="tel:+923001234567"
    className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg text-lg"
  >
    📞
  </a>
</div>
    </html>
  );
};
