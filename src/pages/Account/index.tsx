import React, { useReducer } from "react";

import * as S from "./styles";

import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";

const Account: React.FC = () => {
  const [loginForm, toggleLoginForm] = useReducer((s) => !s, true);

  return (
    <S.Container>
      <S.Header>
        {loginForm ? (
          <LoginForm createAccount={toggleLoginForm} />
        ) : (
          <RegisterForm enterAccount={toggleLoginForm} />
        )}
        <S.Banner />
      </S.Header>
    </S.Container>
  );
};

export { Account };
