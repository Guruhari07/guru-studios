export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "120px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #0b8181, #1344ad)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Welcome to Guru Studios
      </h1>
      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Digital creator focused on meaningful experiences!
      </p>
      <button
        style={{
          marginTop: "30px",
          backgroundColor: "#ff6600",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffa500")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6600")}
      >
        Get Started
      </button>
    </section>
  );
}
