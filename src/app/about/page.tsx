export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] flex flex-col items-center px-4 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 
                     bg-gradient-to-r from-[#4f46e5] to-[#9333ea] 
                     bg-clip-text text-transparent">
        About Us
      </h1>

      {/* Main Card */}
      <div className="w-full max-w-md md:max-w-2xl bg-white/10 backdrop-blur-xl 
                      rounded-2xl shadow-xl p-6 space-y-6">

        <h2 className="text-lg md:text-xl font-bold text-[#bae0ff]">
          Welcome to Marhaba Properties
        </h2>

        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          Real estate market mein hum yahan apki madad ke liye maujood hain.
          Chahe aap apna dream shop khareedna chahte hon ya plots mein
          investment ka irada rakhte hon, Marhaba Properties har qadam par
          aap ke sath hai.
        </p>
      </div>

      {/* Mission Card */}
      <div className="w-full max-w-md md:max-w-2xl mt-6 bg-white/10 backdrop-blur-xl 
                      rounded-2xl shadow-xl p-6 border-l-4 border-[#4f46e5]">

        <h2 className="text-2xl font-bold text-[#bae0ff] mb-3">
          Our Mission
        </h2>

        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          Hamara mission hai ke hum apne customers ko safe, transparent aur
          profitable property solutions provide karein. Trust aur honesty
          hamari pehchan hai.
        </p>
      </div>

      {/* Footer Note */}
      <p className="text-sm md:text-sm text-gray-400 mt-10 opacity-80">
        Trusted by thousands of investors
      </p>

    </div>
  );
}