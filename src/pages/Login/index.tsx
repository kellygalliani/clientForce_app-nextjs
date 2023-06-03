import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./schema";
import { useAuth } from "../../hooks/useAuth";
import { EyeIcon, FormButtonStyled, FormInputDiv, MainStyled } from "./styles";
import brand from "../../assets/brand.png";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MainStyled>
      <div>
        <img
          src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp"
          alt="loginImage"
        />
      </div>
      <div>
        <div>
          <p>Welcome to</p>
          <img src={brand} alt="" />
        </div>

        <form action="" onSubmit={handleSubmit(signIn)}>
          <div className="emptyDiv"></div>
          <FormInputDiv>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Digite seu e-mail"
            />
            <MdEmail className="formIcon" />
            <label htmlFor="email">Email</label>
          </FormInputDiv>
          {errors.email && (
            <p className="errorMessage">{errors.email.message}</p>
          )}

          <FormInputDiv>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Digite sua senha"
            />
            <FaKey className="formIcon" />
            <label htmlFor="password">Password</label>
            {showPassword ? (
              <EyeIcon onClick={handleTogglePassword}>
                <BsFillEyeSlashFill className="eye-icon" />
              </EyeIcon>
            ) : (
              <EyeIcon onClick={handleTogglePassword}>
                <BsFillEyeFill className="eye-icon" />
              </EyeIcon>
            )}
          </FormInputDiv>
          {errors.password && (
            <p className="errorMessage">{errors.password.message}</p>
          )}

          <FormButtonStyled type="submit">Entrar</FormButtonStyled>
          <div className="formFooter">
            <p>Ainda não possui uma conta?</p>
            <Link to={"/register"}>Registrar</Link>
          </div>
        </form>
      </div>
    </MainStyled>
  );
};
