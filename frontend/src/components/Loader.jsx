import React from "react";
import { FaSpinner } from "react-icons/fa"; // Importing spinner icon


const Loader = () => {
  return (
    <>
      <div style={styles.loaderContainer}>
        <FaSpinner style={styles.spinner} /> {/* Loader with icon */}
      </div>
    </>
  );
};

// Simple Loader Styles
const styles = {
    loaderContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
    },
    spinner: {
      fontSize: "50px",
      color: "#e7000b",
      animation: "spin 1s linear infinite",
    },
  };
  
  // Add keyframes for spinning animation
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `@keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`,
    styleSheet.cssRules.length
  );

export default Loader;
