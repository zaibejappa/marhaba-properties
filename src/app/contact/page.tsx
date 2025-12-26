import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#07182d] flex flex-col items-center justify-center px-4 py-10 font-sans">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#8ae1ff] mb-6">
        Contact Us
      </h2>

      {/* Card */}
      <div className="w-full max-w-md bg-[rgba(11,53,142,0.9)] rounded-xl shadow-xl p-6 space-y-6">

        {/* Phone Section */}
        <div className="flex items-center gap-4">
          <Phone className="text-[#00b3ff]" size={36} />
          <div>
            <p className="text-[#c21b6fff] font-bold text-lg">Call Us</p>
            <p className="text-white text-sm">0300-2012466</p>
            <p className="text-white text-sm">0345-2012466</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-4">
          <Mail className="text-[#ea4335]" size={36} />
          <div>
            <p className="text-[#c21b6fff] font-bold text-lg">Email Address</p>
            <p className="text-white text-sm break-all">
              marhabaproperties.pk@gmail.com
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <p className="text-[#c21b6fff] font-bold text-lg mb-1">Address</p>
          <p className="text-white text-sm leading-relaxed">
            Thatha Moosa, Zero Point,  
            Bhawal Sheema, District Chiniot
          </p>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/923452012466"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#0d913d] text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
        >
          <MessageCircle />
          WhatsApp Now
        </a>
      </div>
    </div>
  );
}