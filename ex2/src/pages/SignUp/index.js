import { useState } from "react";
import "./style.css";
import RegisteredSucessfullyImage from "../../assets/woman-success.png";
import BackgroundImage from "../../assets/background.jpg";
import Message from "../../components/Message";
import InputPassword from "../../components/InputPassword";

function SignUp() {
  const [registeredSucessfully, setRegisteredSucessfully] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleChangeForm(e) {
    setError("");
    const value = e.target.value;

    setForm({ ...form, [e.target.name]: value });
  }

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
      {!registeredSucessfully && (
        <div className="container-signup">
          <h1>Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
            <div className="container-inputs">
              <input
                name="name"
                type="text"
                placeholder="Nome"
                value={form.name}
                onChange={(e) => handleChangeForm(e)}
              />
              <input
                name="email"
                type="text"
                placeholder="E-mail"
                value={form.email}
                onChange={(e) => handleChangeForm(e)}
              />
              <InputPassword
                showPassword={showPassword}
                form={form}
                handleChangeForm={handleChangeForm}
                setShowPassword={setShowPassword}
              />

              {error && <span className="error-message">{error}</span>}
            </div>
            <div className="container-buttons">
              <button type="submit" className="btn-red">
                CADASTRAR
              </button>
              <button
                type="button"
                className="btn-blue"
                onClick={() => handleClearInputs()}
              >
                CANCELAR
              </button>
            </div>
          </form>
          <div className="container-link">
            <span>Já tem cadastro?</span>
            <a href="https://google.com">Clique aqui</a>
          </div>
        </div>
      )}
      {registeredSucessfully && (
        <Message
          message="Cadastro efetuado com sucesso!"
          image={RegisteredSucessfullyImage}
        />
      )}
      <div
        className="img-logo"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
    </div>
  );
}

export default SignUp;
