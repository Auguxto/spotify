import React, { useReducer } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useHistory } from "react-router";

import * as S from "../../styles";

type LoginFormProps = {
  createAccount: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ createAccount }) => {
  const history = useHistory();

  const [viewPassword, toggleViewPassword] = useReducer((s) => !s, false);

  function handleLogin() {
    history.push("/");
  }

  return (
    <S.Form>
      <S.Logo />
      <S.Title>Faça o seu login</S.Title>
      <S.Description>
        Conecte-se na maior plataforma de músicas do universo!
      </S.Description>
      <S.InputsContainer>
        <S.InputWrapper>
          <S.InputTitle>E-mail</S.InputTitle>
          <Mail size={20} color="#00F388" />
          <S.Input placeholder="example@email.com" />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputTitle>Senha</S.InputTitle>
          <Lock size={20} color="#00F388" />
          <S.Input
            placeholder="•••••••••••••"
            type={viewPassword ? "text" : "password"}
          />
          <S.InputButton onClick={toggleViewPassword}>
            {viewPassword ? (
              <EyeOff size={20} color="#5C677D" />
            ) : (
              <Eye size={20} color="#5C677D" />
            )}
          </S.InputButton>
        </S.InputWrapper>
      </S.InputsContainer>
      <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
      <S.FormButton onClick={handleLogin}>Entrar na plataforma</S.FormButton>
      <S.Our>ou</S.Our>
      <S.EnterButton onClick={createAccount}>
        Criar uma conta grátis
      </S.EnterButton>
    </S.Form>
  );
};

export { LoginForm };
