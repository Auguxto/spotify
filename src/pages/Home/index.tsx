import React from "react";
import { Bell } from "lucide-react";

import { Sidebar } from "../../components/Sidebar";

import * as S from "./styles";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <S.Header>
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
        </S.Header>
        <S.MainContent>
          <S.MainContentLeft>
            <S.BestMoments>
              <S.BestMomentsHeader>
                <S.BestMomentsTitle>Melhores do momento</S.BestMomentsTitle>
                <S.BestMomentsSeeMore>Ver todos</S.BestMomentsSeeMore>
              </S.BestMomentsHeader>
            </S.BestMoments>
            <S.LastMusics>
              <S.LastMusicsTitle>Últimas músicas tocadas</S.LastMusicsTitle>
            </S.LastMusics>
          </S.MainContentLeft>
          <S.MainContentRight>aaa</S.MainContentRight>
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
};

export { Home };
