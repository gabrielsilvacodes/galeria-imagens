type ImageCardProps = {
  src: string;
  legenda: string;
};

const ImageCard = ({ src, legenda }: ImageCardProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={src}
        alt={`Imagem: ${legenda}`}
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          margin: "0 auto",
          display: "block",
        }}
      />
      <p style={{ marginTop: "0.5rem", fontWeight: "500" }}>{legenda}</p>
    </div>
  );
};

export default ImageCard;
