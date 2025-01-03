import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
      <a
          href="https://github.com/Saahil3"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          Github
        </a>
      </div>
      <div style={copyrightStyle}>
        Made with ❤️ by Sahil
      </div>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: "#0a4275",
  color: "white",
  textAlign: "center",
  padding: "20px 0",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
};

const textStyle = {
  fontSize: "16px",
  margin: 0,
};

const buttonStyle = {
  color: "#0a4275",
  backgroundColor: "white",
  border: "none",
  borderRadius: "20px",
  padding: "8px 16px",
  cursor: "pointer",
  fontWeight: "bold",
  textDecoration: "none",
};

const copyrightStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  fontSize: "14px",
  fontFamily: "Arial, sans-serif",
};

export default Footer;
