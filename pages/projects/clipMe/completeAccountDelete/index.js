import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const BASE_URL = process.env.NEXT_PUBLIC_CLIPME_BASE_URL;

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = router.query;

  const deleteAccount = async (secret) => {
    try {
        setLoading(true)
      const response = await fetch(`${BASE_URL}/confirmDelete`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ secret }),
      });

      const resp = await response.json();
      console.log("resp====>", resp);
    } catch (error) {
        setError("API got error. Please try to request a new delete url.")
    }
    setLoading(false)

  };

  useEffect(() => {
    if (token) {
      deleteAccount(token);
    }
  }, [token]);

  return (
    <main style={styles.container}>
      {loading && <span>Loading...</span>}
      {!loading && !error && (
        <div style={styles.messageContainer}>
          <h2 style={styles.heading}>Your Account Has Been Deleted</h2>
          <p style={styles.paragraph}>
            You can re-register at any time via the mobile application.
          </p>
          <a
            style={styles.button}
            href="https://play.google.com/store/apps/details?id=com.clipme.extention&hl=en_GB"
            target="_blank"
            rel="noreferrer"
          >
            Re-register
          </a>
        </div>
      )}

      {!loading && error && <div>{error}</div>}
    </main>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  messageContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "2px solid #ccc",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginTop: 0,
    color: "#333",
  },
  paragraph: {
    color: "#666",
  },
  button: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    marginTop: "20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Page;
