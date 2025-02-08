import { useState } from "react";
import { motion } from "framer-motion";

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
        minHeight: "110vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #FF8E9E,rgba(205, 139, 16, 0.73))",
        padding: "16px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={{
          background: "linear-gradient(135deg, #FFD3A5, #FD6585)",
          padding: "26.4px",
          borderRadius: "26.4px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "440px",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          style={{
            color: "gray",
            fontSize: "38.4px",
            fontWeight: "bold",
            marginBottom: "19.2px",
            textAlign: "center",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Add Your Home
        </motion.h1>
        <motion.form
          style={{ display: "flex", flexDirection: "column", gap: "19.2px" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <label style={{ fontWeight: "bold", marginBottom: "9.6px", display: "block" ,fontSize: "20.2px"}}>Home Name:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "14.4px",
                borderRadius: "9.6px",
                border: "1px solid gray",
                fontSize: "19.2px",
              }}
              placeholder="Enter home name"
            />
          </div>
          <div>
            <label style={{ fontWeight: "bold", marginBottom: "9.6px", display: "block" ,fontSize: "20.2px"}}>Address:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "14.4px",
                borderRadius: "9.6px",
                border: "1px solid gray",
                fontSize: "19.2px",
              }}
              placeholder="Enter address"
            />
          </div>
          <div>
            <label style={{ fontWeight: "bold", marginBottom: "9.6px", display: "block" ,fontSize: "20.2px" }}>City:</label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "14.4px",
                borderRadius: "9.6px",
                border: "1px solid gray",
                fontSize: "19.2px",
              }}
              placeholder="Enter city"
            />
          </div>
          <div>
            <label style={{ fontWeight: "bold", marginBottom: "9.6px", display: "block" ,fontSize: "20.2px"}}>Phone Number:</label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="10"
              onInput={handlePhoneInput}
              style={{
                width: "100%",
                padding: "14.4px",
                borderRadius: "9.6px",
                border: "1px solid gray",
                fontSize: "19.2px",
                appearance: "none",
                MozAppearance: "textfield",
              }}
              placeholder="Enter phone number"
            />
          </div>
          <div style={{ position: "relative", zIndex: 1 ,fontSize: "20.2px"}}>
          <label
            style={{
              fontWeight: "bold",
              marginBottom: "9.6px",
              display: "block",
            }}
          >
            Password:
          </label>
          <div
            style={{
              position: "relative",
              zIndex: 1, /* Ensures input stays below the menu */
            }}
          >
            <input
              type={passwordVisible ? "text" : "password"}
              style={{
                width: "100%",
                padding: "14.4px",
                borderRadius: "9.6px",
                border: "1px solid gray",
                fontSize: "19.2px",
                position: "relative",
                zIndex: 1, /* Keeps input below mobile menu */
                background: "white",
              }}
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{
                fontSize: "24px",
                position: "absolute",
                right: "19.4px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                zIndex: 2, /* Ensures button is clickable */
              }}
            >
              {passwordVisible ? "👀" : "🙈"}
            </button>
          </div>
        </div>
          <div>
            <label style={{ fontWeight: "bold", marginBottom: "9.6px", display: "block" ,fontSize: "20.2px"}}>Needs Food:</label>
            <div style={{ display: "flex", alignItems: "center", gap: "9.6px" }}>
              <span>No</span>
              <label style={{ position: "relative", display: "inline-block", width: "37.4px", height: "22px" }}>
                <input
                  type="checkbox"
                  checked={needsFood}
                  onChange={() => setNeedsFood(!needsFood)}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: needsFood ? "green" : "red",
                    transition: ".4s",
                    borderRadius: "22px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    height: "15.4px",
                    width: "15.4px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    top: "3.3px",
                    left: needsFood ? "19.8px" : "3.3px",
                    transition: ".4s",
                  }}
                />
              </label>
              <span>Yes</span>
            </div>
          </div>
          <div>
            <label style={{ fontWeight: "bold", marginBottom: "9.6px", display: "block" ,fontSize: "20.2px"}}>Upload Home Image:</label>
            <input
              type="file"
              style={{
                width: "100%",
                padding: "14.4px",
                borderRadius: "9.6px",
                border: "1px solid gray",
                fontSize: "19.2px",
              }}
            />
          </div>
          <motion.button
            style={{
              width: "100%",
              background: "green",
              color: "white",
              padding: "14.4px",
              borderRadius: "9.6px",
              fontSize: "19.2px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Add Home
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}