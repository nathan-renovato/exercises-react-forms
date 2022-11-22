import "./style.css";

export default function Message({ image, message }) {
  return (
    <div className="container-registered-sucessfully">
      <img
        src={image}
        alt="cadastro realizado com sucesso"
        className="img-registration-done"
      />
      {message && <h2>{message}</h2>}
    </div>
  );
}
