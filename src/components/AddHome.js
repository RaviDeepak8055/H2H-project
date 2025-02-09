import { useState } from "react";
import { motion } from "framer-motion";
import "./AddHome.css";


export default function AddHome() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [needsFood, setNeedsFood] = useState(false);

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    if (value.length > 10) {
      value = value.slice(0, 10); // Limit to 10 digits
    }
    e.target.value = value;
  };

  return (
    <motion.div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #FF8E9E, rgba(205, 139, 16, 0.73))",
        padding: "5.54rem 1rem", // Reduced padding
        overflow: "hidden",
        boxSizing: "border-box",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={{
          background: "linear-gradient(135deg, #FFD3A5, #FD6585)",
          padding: "1.5rem", // Reduced padding
          borderRadius: "15px",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          width: "85%",
          maxWidth: "400px", // Reduced width
          height: "auto",
          transform: "scale(0.9)", // Shrinks the entire form
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          style={{
            color: "rgba(141, 136, 136, 0.86)",
            fontSize: "2rem", // Reduced font size
            fontWeight: "bold",
            marginBottom: "0.8rem",
            textAlign: "center",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Add Your Home
        </motion.h1>

        <motion.form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { label: "Home Name", type: "text", placeholder: "Enter home name" },
            { label: "Address", type: "text", placeholder: "Enter address" },
            { label: "City", type: "text", placeholder: "Enter city" },
            { label: "Phone Number", type: "text", placeholder: "Enter phone number", onInput: handlePhoneInput, maxLength: 10 },
          ].map((field, index) => (
            <div key={index}>
              <label style={{ fontWeight: "bold", fontSize: "1.2rem", display: "block", marginBottom: "0.3rem" }}>
                {field.label}:
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                onInput={field.onInput}
                maxLength={field.maxLength}
                style={{
                  width: "100%",
                  padding: "0.6rem", // Reduced padding
                  borderRadius: "6px", // Slightly smaller
                  border: "1px solid gray",
                  fontSize: "0.9rem", // Reduced font size
                }}
              />
            </div>
          ))}

          <div>
            <label style={{ fontWeight: "bold", fontSize: "1.2rem", display: "block", marginBottom: "0.3rem" }}>
              Password:
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                style={{
                  width: "100%",
                  padding: "0.6rem",
                  borderRadius: "6px",
                  border: "1px solid gray",
                  fontSize: "0.9rem",
                }}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {passwordVisible ? "👀" : "🙈"}
              </button>
            </div>
          </div>

          <div>
            <label style={{ fontWeight: "bold", fontSize: "1.2rem", display: "block", marginBottom: "0.3rem" }}>
              Needs Food:
            </label>
            <div className="toggle-container" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>No</span>
              <input
                type="checkbox"
                id="checkboxInput"
                checked={needsFood}
                onChange={() => setNeedsFood(!needsFood)}
              />
              <label htmlFor="checkboxInput" className="toggleSwitch"></label>
              <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Yes</span>
            </div>
          </div>
          <div>
            <label style={{ fontWeight: "bold", fontSize: "1.2rem", display: "block", marginBottom: "0.3rem" }}>
              Upload Home Image:
            </label>
            <input
              type="file"
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "6px",
                border: "1px solid gray",
                fontSize: "0.9rem",
              }}
            />
          </div>
          <button className="add-home-button">
  Add Home
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}