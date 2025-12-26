import React from 'react'

export default function AboutPage() {

  const containerStyle: React.CSSProperties= {
     textAlign: 'center',
    minHeight: "100vh",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e1b4b 100%)",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

  const cardStyle:React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "30px",
    maxWidth: "800px",
    width: "100%",
    marginBottom: "25px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    transition: "transform 0.3s ease"
  };

  const titleStyle:React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "40px",
    background: "linear-gradient(to right, #4f46e5, #9333ea)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      {/* 1. Header Section */}
      <h1 style={titleStyle}>About Us</h1>
      {/* 2. Main Content Card (Marhaba Properties Section) */}
      <div style={cardStyle}>
        <h1 style={{fontSize: "1.1rem", color: "#bae01eff", marginBottom: "20px",fontWeight: "bold",}}>Welcome to Marhaba Properties</h1>
        <p style={{ lineHeight: "1.2", fontSize: "1.4rem", color: "#d1d6dbff" }}>
          Real estate market mein hum yahan aapki madad ke liye maujood hain. 
          Chahe aap apni dream shop khareedna chahte hon ya plots mein investment ka irada rakhte hon, 
          Property se mutaliq kisi bhi maslay ya mashwaray ke liye hamare paas zaroor ayein. 
          Aapka faida hamari pehli tarjeeh hai.
        </p>
      </div>

      {/* 3. Mission Card */}
      <div style={{ ...cardStyle, borderLeft: "5px solid #4f46e5" }}>
        <h2 style={{fontSize: "2.5rem", color: "#bae01eff", marginBottom: "15px",fontWeight: "bold"  }}>Our Mission</h2>
        <p style={{ lineHeight: "1.8", fontSize: "1.4rem", color: "#cbd5e1" }}>
          Our mission is to help you find your dream home with ease and complete transparency. 
          Hum chahte hain ke har customer ko sahi jagah aur behtareen deal mile.
        </p>
      </div>

      {/* 4. Contact/Footer small note */}
      <p style={{ marginTop: "20px", opacity: 0.7 }}>Trusted by thousands of investors.</p>
    </div>
  );
};
