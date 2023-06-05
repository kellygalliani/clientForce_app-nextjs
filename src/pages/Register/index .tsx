import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterData, registerSchema } from "./schema";
import { useAuth } from "../../hooks/useAuth";
import { FormButtonStyled, FormInputDiv, MainStyled } from "./styles";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";

export const Register = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPassword, _setShowPassword] = useState(false);
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
            <div className="logo">
              <RiContactsFill />
              <p>ClientForce</p>
            </div>
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
              type="text"
              id="phone"
              {...register("phone")}
              placeholder="(xx) 9xxxx-xxxx"
            />
            <MdEmail />
            <label htmlFor="phone">Telefone</label>
          </FormInputDiv>
          {errors.phone && (
            <p className="errorMessage">{errors.phone.message}</p>
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

          <FormButtonStyled type="submit">Registrar</FormButtonStyled>
        </form>
      </div>
    </MainStyled>
  );
};
