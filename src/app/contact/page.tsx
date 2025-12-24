import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

     
export default function Contact() {
  return (
    <div style={{
      padding: "10px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      backgroundColor: "#17182efd",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ fontSize: "6rem", color: "#bae01eff", marginBottom: "10px" }}>Contact-Us</h2>

      <div style={{
        backgroundColor: "rgba(11, 53, 142, 1)",
        padding: "30px",
        borderRadius: "55px",
        boxShadow: "0 16px 15px rgba(171, 171, 46, 0.1)",
        width: "100%",
        minHeight: "10vh",
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        
        {/* Phone Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Phone color="#0b3285ff" size={44} />
          <div>
            <p style={{ fontSize: "2.0rem", margin: 0, fontWeight: "bold", color: "#e21b46ff" }}>Call Us</p>
            <p style={{ fontSize: "2rem", margin: 0,color: "white" }}>0300-2012466</p>
            <p style={{ fontSize: "2rem", margin: 0,color: "white" }}>0345-2012466</p>
          </div>
        </div>

        {/* Email Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Mail color="#ea4335" size={44} />
          <div>
            <p style={{ fontSize: "2.0rem", margin: 0, fontWeight: "bold", color: "#e21b46ff" }}>Email Adress</p>
            <p style={{ fontSize: "1.6rem", margin: 0,color: "white" }}>marhabaproperties.pk@gmail.com</p>
        
             <p style={{ fontSize: "2.0rem", margin: 0, fontWeight: "bold", color: "#e21b46ff" }}>Address</p>
            <p style={{ fontSize: "1.6rem", margin: 0,color: "white" }}>Thatha Moosa, Zero Point, Bhowana , 
              Tehsil Bhowana, District Chiniot.</p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/923002012466" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "#0d913dff",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "10px",
            transition: "1.3s"
          }}
        >
          <MessageCircle size={54} />
          WhatsApp Now
        </a>

      </div>
    </div>
  );
};
