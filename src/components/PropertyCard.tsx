
  "use client";
import React from 'react';
import { auth } from "../app/components/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

type Props = {
  title: string;
  location: string;
  price: string;
};

export default function PropertyCard({ title, location, price }: Props) {
  
  const handleLogin = async () => {
    try {
      <a
  href={`https://wa.me/923452012466?text=Hi%2C%20I%20am%20interested%20in%20this%20property:%0A%0ATitle:%20${encodeURIComponent(title)}
  %0ALocation:%20${encodeURIComponent(location)}%0APrice:%20${encodeURIComponent(price)}%0A%0APlease%20contact%20me.`}
  target="_blank"
  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold mt-3 inline-block"
>
  💬 WhatsApp About This Property
</a>
      // Yahan '=' hona zaroori hai
      const user = await signInWithEmailAndPassword(auth, "admin@gmail.com", "123456");
      console.log("Logged in successfully:", user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div style={{ 
      fontSize: "1.4rem", 
      border: "1px solid #b3b5acff", 
      padding: "25px", 
      textAlign: "center", 
      background: "rgba(59, 65, 152, 1)",
      color: "white",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
      <h6>{title}</h6>
      <p>{location}</p>
      <strong>{price}</strong>
      <br />
      <button 
        onClick={handleLogin}
        style={{ marginTop: "10px", padding: "10px", cursor: "pointer", color: "black", background: "white", borderRadius: "5px", border: "none" }}
      >
        Login to View
      </button>
    </div>
  );
}
   
