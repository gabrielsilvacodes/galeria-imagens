import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <main
      style={{
        padding: "2rem",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
          Galeria de Imagens
          <span role="img" aria-label="imagem" style={{ marginLeft: "0.5rem" }}>
            🖼️
          </span>
        </h1>
        <p style={{ color: "#555" }}>
          Adicione suas imagens favoritas com legenda
        </p>
      </header>

      <ImageGallery />
    </main>
  );
}

export default App;
