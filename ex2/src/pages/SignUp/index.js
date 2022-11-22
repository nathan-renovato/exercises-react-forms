import { useState } from "react";
import "./style.css";
import OpenEyeIcon from "../../assets/open-eye.svg";
import CloseEyeIcon from "../../assets/close-eye.svg";
import RegisteredSucessfullyImage from "../../assets/woman-success.png";
import BackgroundImage from "../../assets/background.jpg";

function SignUp() {
  const [registeredSucessfully, setRegisteredSucessfully] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Preencha todos os campos!");
      return;
    }

    setRegisteredSucessfully(true);
  }

  function handleClearInputs() {
    setError("");
    setForm({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="signup">
      <div
        className="container-signup"
        style={
          registeredSucessfully ? { display: "none" } : { display: "flex" }
        }
      >
        <form onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <div className="container-inputs">
            <input
              type="text"
              placeholder="Nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <div className="container-input-password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <img
                src={showPassword ? OpenEyeIcon : CloseEyeIcon}
                alt="ícone mostrar senha"
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <span className="error-message">{error}</span>
          </div>
          <div className="container-buttons">
            <button className="btn-register">CADASTRAR</button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => handleClearInputs()}
            >
              CANCELAR
            </button>
          </div>
          <span>
            Já tem cadastro? <a>Clique aqui</a>
          </span>
        </form>
      </div>
      <div
        className="container-registered-sucessfully"
        style={
          registeredSucessfully ? { display: "flex" } : { display: "none" }
        }
      >
        <img
          src={RegisteredSucessfullyImage}
          alt="cadastro realizado com sucesso"
          className="img-registration-done"
        />
        <h2>Cadastro efetuado com sucesso!</h2>
      </div>
      <div
        className="img-logo"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
    </div>
  );
}

export default SignUp;
