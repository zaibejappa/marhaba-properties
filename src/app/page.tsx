
  

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
          src="https://youtu.be/NuNJF9C3eKM?si=5DzyfmZbH8XBKJ1a" // Apni sahi video ID yahan dalen
            title="Business Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
    
       
      </section>
    </main>
  );
}
  