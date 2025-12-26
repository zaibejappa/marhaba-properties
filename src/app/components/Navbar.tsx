import Link from "next/link";
import Image from "next/image";

const Myfunction= () => {}

export default function Navbar() {

  const navStyles: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 50px",
    background: "rgba(30, 33, 79, 0.9)", // Unique Dark Glass look
    backdropFilter: "blur(10px)",
    borderBottom: "2px solid #4f46e5",
    position: "sticky",
    top: 0,
    zIndex: 1000
  };

  const imgStyle: React.CSSProperties = {
    borderRadius: "50%", // Fully Rounded
    objectFit: "cover",
    border: "2px solid #fff"
  };

  const linkButtonStyle: React.CSSProperties = {
    margin: "0 8px",
    padding: "8px 18px",
    backgroundColor: "#4f46e5", 
    color: "white",
    textDecoration: "none",
    borderRadius: "20px", 
    fontSize: "14px",
    fontWeight: "600",
    display: "inline-block"
  };

  // 2. Sirf ek hi return hona chahiye jo yahan se shuru ho raha hai
  return (
    <nav style={navStyles}>
      {/* Left Logo Image */}
      <div style={{ flex: 1 }}>
        <Image 
          src="/zaibe5.jpg" 
          alt="Left Logo" 
          width={155} 
          height={155} 
          style={imgStyle} 
        />
      </div>

     {/* 2. Center Section (Brand Name + Links) */}
      <div style={{ flex: 2, textAlign: "center" }}>
        <h1 style={{ color: "white", margin: "0 0 10px 0", fontSize: "1.6rem", fontWeight: "bold" }}>
          Marhaba Properties
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/" style={linkButtonStyle}>Home</Link>
          <Link href="/about" style={linkButtonStyle}>About</Link>
          <Link href="/properties" style={linkButtonStyle}>Properties</Link>
          <Link href="/contact" style={linkButtonStyle}>Contact</Link>
        </div>
      </div>
{/* 3. Right Image Container (Mukammal Right) */}
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <Image 
          src="/zaib3.jpg" 
          alt="Right Logo" 
          width={155} 
          height={155} 
          style={imgStyle} 
        />
      </div>
    </nav>
  );
};
