import React from 'react'
        type Props = {
  title: string;
  location: string;
  price: string;
};

export default function PropertyCard({ title, location, price }: Props) {
  return (
    <div style={{fontSize:"1.2rem", border: "1px solid #bbb8c3ff", padding: "25px",fontWeight: "bold", display: "flex", alignItems:
     "center", gap: "20px",background: "rgba(59, 65, 152, 1)" }}> 
      <h3>{title}</h3>
      <p>{location}</p>
      <strong>{price}</strong>
    </div>
  );
};
