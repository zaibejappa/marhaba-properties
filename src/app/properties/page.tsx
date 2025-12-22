import React from "react";

import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";


export default function Properties() {
  // --- 1. Background aur Main Page Style ---
  const pageContainer: React.CSSProperties = {
    minHeight: "100vh",
    padding: "30px 20px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", // Deep Luxury Blue
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  // --- 2. Heading Style (Isko aap yahan se chota/bada kar sakte hain) ---
  const mainHeading: React.CSSProperties = {
    fontSize: "5.5rem", // Isse bada/chota karein
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: "40px",
    textShadow: "0px 4px 15px rgba(79, 70, 229, 0.6)", // Glowing effect
    textAlign: "center"
  };

  // --- 3. Grid Layout (Cards ko line mein set karne ke liye) ---
  const gridLayout: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive Grid
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    padding: "20px"
  };

  return (
    <div style={pageContainer}>
      {/* Page Title */}
      <h2 style={{fontSize: "4.5rem", color: "#bae01eff", marginBottom: "20px",fontWeight: "bold",}}>Available Properties</h2>

      {/* Properties Grid */}
      <div style={gridLayout}>
        {properties.map((item) => (
          <div key={item.id} style={cardWrapperStyle}>
             <PropertyCard 
                key={item.id}
                title={item.title}
                location={item.location}
                price={item.price}
             />
             {/* Aap yahan extra text ya buttons bhi add kar sakte hain */}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- 4. Card Wrapper Style (Attractive look ke liye) ---
const cardWrapperStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
};


