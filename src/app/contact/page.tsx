import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

     
export default function Contact() {
  return (
    <div style={{
      padding: "50px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "25px",
      backgroundColor: "#161739fd",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ fontSize: "6rem", color: "#bae01eff", marginBottom: "10px" }}>Contact-Us</h2>

      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        
        {/* Phone Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Phone color="#2563eb" size={24} />
          <div>
            <p style={{ margin: 0, fontWeight: "bold", color: "#555" }}>Call Us</p>
            <p style={{ fontSize: "2rem", margin: 0,color: "#333" }}>0300-2012466</p>
            <p style={{ fontSize: "2rem", margin: 0,color: "#333" }}>0345-2012466</p>
          </div>
        </div>

        {/* Email Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Mail color="#ea4335" size={24} />
          <div>
            <p style={{ margin: 0, fontWeight: "bold", color: "#e21b46ff" }}>Email Address</p>
            <p style={{ fontSize: "1rem", margin: 0,color: "#333" }}>zaibejappa26@gmail.com</p>
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
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "10px",
            transition: "0.3s"
          }}
        >
          <MessageCircle size={24} />
          WhatsApp Now
        </a>

      </div>
    </div>
  );
};
