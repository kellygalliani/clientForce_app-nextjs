import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./schema";
import { useAuth } from "../../hooks/useAuth";
import { EyeIcon, FormButtonStyled, FormInputDiv, MainStyled } from "./styles";
import brand from "../../assets/brand.png";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const { signUp } = useAuth();

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
          <div>
            <p>Register in</p>
            <img src={brand} alt="" />
          </div>
          <div>
            <p>Já possui conta?</p>
            <Link to={"/"}>Ir para Login</Link>
          </div>
        </div>

        <form action="" onSubmit={handleSubmit((data) => signUp(data))}>
          <FormInputDiv>
            <input
              type="name"
              id="name"
              {...register("name")}
              placeholder="Seu nome aqui"
            />
            <MdAccountCircle />
            <label htmlFor="name">Nome</label>
          </FormInputDiv>
          {errors.name && <p className="errorMessage">{errors.name.message}</p>}

          <FormInputDiv>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="exemplo@mail.com"
            />
            <MdEmail />
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
            <FaKey />
            <label htmlFor="email">Senha</label>
          </FormInputDiv>
          {errors.password && (
            <p className="errorMessage">{errors.password.message}</p>
          )}

          <FormInputDiv>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              {...register("confirmPassword")}
              placeholder="Digite novamente sua senha"
            />
            <FaKey />
            <label htmlFor="email">Confirme a Senha</label>
          </FormInputDiv>
          {errors.confirmPassword && (
            <p className="errorMessage">{errors.confirmPassword.message}</p>
          )}

          <FormButtonStyled type="submit">Registrar</FormButtonStyled>
        </form>
      </div>
    </MainStyled>
  );
};
