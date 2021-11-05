import React from "react";
import { Bell } from "lucide-react";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      <div className="main">
        <S.GoodNight>Boa noite!</S.GoodNight>
        <S.UserCard>
          <S.CardIcon />
          <S.CardTexts>
            <S.CardName>Victor Augusto</S.CardName>
            <S.CardDescription>@victoraugusto</S.CardDescription>
          </S.CardTexts>
          <S.CardNotifications>
            <Bell size={20} color="#FFFFFF" />
          </S.CardNotifications>
        </S.UserCard>
      </div>
      <S.Categories>
        <S.Categorie active>Musica</S.Categorie>
        <S.Categorie>Podcast</S.Categorie>
        <S.Categorie>Radio</S.Categorie>
        <S.Categorie>Live</S.Categorie>
      </S.Categories>
    </S.Container>
  );
};

export { Header };
