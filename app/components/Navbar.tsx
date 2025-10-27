"use client";
import React from "react";

export default function Navbar() {
  const navStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #1344ad, #0b8181, #5c2c64)",
    padding: "20px 60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    margin: "0 25px",
    position: "relative",
    transition: "all 0.3s ease",
  };

  const linkHoverStyle: React.CSSProperties = {
    color: "#ffcc00",
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", gap: "20px" }}>
        {["home", "about", "services", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = linkHoverStyle.color!;
              e.currentTarget.style.textDecoration = "underline";
              e.currentTarget.style.textDecorationColor = "#ffcc00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = linkStyle.color!;
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
