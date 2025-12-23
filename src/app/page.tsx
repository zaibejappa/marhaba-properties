import React from 'react'

const Myfunction= () => {}

      export default function Home() {
  return (
    <main style={{ 
      padding: "60px 20px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg, #0c1e25ff, #0c1f25ff, #16272fff)",
      minHeight: "100vh",
    }}>
      {/* Main Heading */}
      <h1 style={{ 
        fontSize: "3rem", 
        color: "#bae01eff", 
        marginBottom: "20px",
        fontWeight: "bold" 
      }}>
        Welcome to Marhaba Properties
      </h1>

      {/* Identity Line - Elegant Style */}
      <p style={{ 
        fontSize: "1.4rem", 
        color: "#d6d9dfff", 
        maxWidth: "900px", 
        lineHeight: "2.6",
        fontStyle: "italic",
        borderBottom: "2px solid #e2e8f0",
        paddingBottom: "20px",
        marginBottom: "30px"
      }}>
        A trusted and reliable real estate agency for buying and selling property in Bhowana.
      We provide transparent, secure  and professional services.
      Quick registration, clear documentation and trustworthy deals are our identity.
      </p>

      {/* Highlighted Section - The Best Options */}
      <div style={{
        backgroundColor: "#2f279cff",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 6px rgba(150, 133, 133, 0.1)",
        maxWidth: "600px"
      }}>
        <h2 style={{fontSize: "2.1rem", color: "#bae01eff", marginBottom: "10px" }}>
          Premium Selection
        </h2>
        <p style={{ 
          fontSize: "2.1rem", 
          color: "#b3bbc5ff", 
          fontWeight: "500" 
        }}>
          The best options are availabe accourding to your need and budget.
        </p>
      </div>
    </main>
  );
};
