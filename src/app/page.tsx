
      import React from "react";

export default function Home() {
  return (
    <main className="p-4 space-y-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold text-center">
        Marhaba Properties
      </h1>

      <div className="bg-white rounded-2xl p-4 shadow">
        <p className="text-gray-600 text-sm text-center">
          Trusted real estate services for buying & selling property.
        </p>
      </div>

      {/* Business Intro */}
      <section className="text-center">
        <h2 className="text-xl font-bold mb-2">
          Our Business Introduction
      </h2>
        <p className="text-gray-600">
          Watch how we help you buy and sell property safely.
        </p>
      </section>

      {/* Video */}
      <section className="max-w-md mx-auto">
        <iframe
          className="w-full aspect-video rounded-xl shadow"
          src="https://www.youtube.com/embed/ABC123XYZ"
          title="Business Intro Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>

      {/* WhatsApp Button */}
      <section className="text-center">
       <a
  href="https://wa.me/923452012466?text=Hi%20I%20am%20interested"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-500 text-white px-6 py-3 rounded-full"
>
  Contact on WhatsApp
</a>
      </section>

    </main>
  );
}
  
