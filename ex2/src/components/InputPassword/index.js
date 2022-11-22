import "./style.css";
import OpenEyeIcon from "../../assets/open-eye.svg";
import CloseEyeIcon from "../../assets/close-eye.svg";

export default function InputPassword({
  showPassword,
  form,
  handleChangeForm,
  setShowPassword,
}) {
  return (
    <div className="container-input-password">
      <input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        value={form.password}
        onChange={(e) => handleChangeForm(e)}
      />
      <img
        src={showPassword ? OpenEyeIcon : CloseEyeIcon}
        alt="ícone mostrar senha"
        className="eye-icon"
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
}
