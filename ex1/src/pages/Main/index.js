import { useState } from "react";
import "./style.css";
import CloseEyeIcon from "../../assets/close-eye.svg";
import OpenEyeIcon from "../../assets/open-eye.svg";

function Main() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email) {
      console.log("Informe os dados corretamente...");
      return;
    }

    if (form.password < 8) {
      console.log("Informe os dados corretamente...");
      return;
    }

    console.log(`Bem vindo ${form.email}`);
  }

  return (
    <div className="container-form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <div className="inputs-form">
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <img
            src={showPassword ? OpenEyeIcon : CloseEyeIcon}
            alt="ícone mostrar senha"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Main;
