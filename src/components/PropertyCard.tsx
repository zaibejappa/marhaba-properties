import { TextAlignCenter } from 'lucide-react';
import React from 'react'
        type Props = {
  title: string;
  location: string;
  price: string;
};

export default function PropertyCard({ title, location, price }: Props) {
  return (
    <div style={{fontSize:"1.4rem", border:"1px solid #b3b5acff", padding: "25px",color:"#bae01eff",fontWeight: "bold", display: "flex", alignItems:
    "center", gap: "15px",background: "rgba(59, 65, 152, 1)" }}> 
      <h6>{title}</h6>
      <p>{location}</p>
      <strong>{price}</strong>
    </div>
  );
};
