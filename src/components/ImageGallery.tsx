import { useState } from "react";
import ImageCard from "./ImageCard";

type Imagem = {
  src: string;
  legenda: string;
};

const ImageGallery = () => {
  const [imagens, setImagens] = useState<Imagem[]>([]);
  const [novaImagem, setNovaImagem] = useState("");
  const [novaLegenda, setNovaLegenda] = useState("");

  const adicionarImagem = () => {
    if (novaImagem.trim() && novaLegenda.trim()) {
      setImagens([...imagens, { src: novaImagem, legenda: novaLegenda }]);
      setNovaImagem("");
      setNovaLegenda("");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          adicionarImagem();
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="URL da imagem"
          value={novaImagem}
          onChange={(e) => setNovaImagem(e.target.value)}
          style={{
            padding: "0.5rem",
            minWidth: "250px",
            flex: "1 1 40%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="Legenda"
          value={novaLegenda}
          onChange={(e) => setNovaLegenda(e.target.value)}
          style={{
            padding: "0.5rem",
            minWidth: "150px",
            flex: "1 1 30%",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0077cc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          Adicionar
        </button>
      </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {imagens.map((img, index) => (
          <ImageCard key={index} src={img.src} legenda={img.legenda} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
