import React, { useReducer } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useHistory } from "react-router";

import * as S from "../../styles";

type RegisterFormProps = {
  enterAccount: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ enterAccount }) => {
  const history = useHistory();

  const [viewPassword, toggleViewPassword] = useReducer((s) => !s, false);
  const [viewConfirmPassword, toggleConfirmViewPassword] = useReducer(
    (s) => !s,
    false
  );

  function handleRegister() {
    history.push("/");
  }

  return (
    <S.Form>
      <S.Logo />
      <S.Title>Registre-se agora</S.Title>
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
        <S.InputWrapper>
          <S.InputTitle>Confirmar Senha</S.InputTitle>
          <Lock size={20} color="#00F388" />
          <S.Input
            placeholder="•••••••••••••"
            type={viewConfirmPassword ? "text" : "password"}
          />
          <S.InputButton onClick={toggleConfirmViewPassword}>
            {viewConfirmPassword ? (
              <EyeOff size={20} color="#5C677D" />
            ) : (
              <Eye size={20} color="#5C677D" />
            )}
          </S.InputButton>
        </S.InputWrapper>
      </S.InputsContainer>
      <S.FormButton onClick={handleRegister}>Criar conta</S.FormButton>
      <S.Our>ou</S.Our>
      <S.RegisterButton onClick={enterAccount}>
        Ja possui conta?
      </S.RegisterButton>
    </S.Form>
  );
};

export { RegisterForm };
