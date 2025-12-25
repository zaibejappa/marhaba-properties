
  

export default function MarhabaProperties() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 font-sans">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Marhaba Properties
        </h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm mt-4 border border-gray-100">
          <p className="text-gray-600 text-sm text-center">
            Trusted real estate services for buying & selling property.
          </p>
        </div>
      </header>

      {/* Business Intro Section */}
      <section className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Our Business Introduction
        </h2>
        <p className="text-gray-600 mb-6">
          Watch how we help you buy and sell property safely.
        </p>

        {/* Video Container */}
        <div className="max-w-md mx-auto">
         <iframe
  loading="lazy"
  className="w-full aspect-video rounded-xl shadow-lg "
          src="https://www.youtube.com/embed/REAL_VIDEO_ID" // Apni sahi video ID yahan dalen
            title="Business Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="flex flex-col gap-4 items-center mt-10">
        {/* WhatsApp Button - Size Updated */}
        <a
          href="https://wa.me/923452012466?text=Hi%20I%20am%20interested"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-5 py-3 text-xl font-bold rounded-full shadow-lg hover:bg-green-600 transition-all text-center w-full max-w-xs"
        >
          Contact on WhatsApp
        </a>

        {/* Call Button */}
        <a
          href="tel:+923452012466"
          className="inline-block bg-blue-600 text-white px-5 py-3 text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all text-center w-full max-w-xs"
        >
          Call Now
        </a>
      </section>
    </main>
  );
}
  