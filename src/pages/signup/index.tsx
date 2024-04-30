import { Header } from "../../components/Header";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";
import { validatePassword } from "../../services/validation";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validate = validatePassword

  const handleSubmitSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate(password)) {
      setPasswordError(
        "A senha deve ter mais de 6 caracteres, com letras maiúscula e minúscula, pelo menos um número e um caracter especial."
      );
      return;
    }

    try {
      const response = await signup({
        name,
        email,
        password,
      });
      navigate("/posts");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Header logo={logo} hasClose={false} labelAction="Entrar" />
      <div className={style["signup-container"]}>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
        <form onSubmit={handleSubmitSignup} className={style["signup-form"]}>
          <Input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Apelido"
            type="text"
            required
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="E-mail"
            type="email"
            required
          />
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              setPasswordError("");
            }}
            placeholder="Senha"
            type="password"
            required
          />
          <div className={style["error-message"]}>
            {passwordError && (
              <p >
                {passwordError}
              </p>
            )}
          </div>
          <Checkbox />
          <Button
            variant="primary"
            type="submit">
            Cadastrar
          </Button>
        </form>
      </div>
    </>
  );
};

export default Signup;
