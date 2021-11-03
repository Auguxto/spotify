import React from "react";
import { Bell } from "lucide-react";

import { Sidebar } from "../../components/Sidebar";

import krawk from "../../assets/artists/Krawk.png";
import Anaju_Mendes from "../../assets/artists/Anaju_Mendes.png";

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
                <p className="title">Melhores do momento</p>
                <p className="see-all">Ver todos</p>
              </S.BestMomentsHeader>
              <div className="list">
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
                <button className="music">
                  <img src={Anaju_Mendes} className="thumb" />
                  <div className="texts">
                    <p className="name">House Party</p>
                    <p className="artist">Anaju Mendes</p>
                  </div>
                </button>
              </div>
            </S.BestMoments>
            <S.LastMusics>
              <p className="title">Últimas músicas tocadas</p>
            </S.LastMusics>
          </S.MainContentLeft>
          <S.MainContentRight>
            <p className="title">Acesso rápido</p>
            <div className="list">
              <button className="music">
                <img src={krawk} />
                <div className="texts">
                  <p className="name">Trap</p>
                  <p className="description">40 músicas • 20 minutos</p>
                </div>
              </button>
              <button className="music">
                <img src={krawk} />
                <div className="texts">
                  <p className="name">Trap</p>
                  <p className="description">40 músicas • 20 minutos</p>
                </div>
              </button>
              <button className="music">
                <img src={krawk} />
                <div className="texts">
                  <p className="name">Trap</p>
                  <p className="description">40 músicas • 20 minutos</p>
                </div>
              </button>
              <button className="music">
                <img src={krawk} />
                <div className="texts">
                  <p className="name">Trap</p>
                  <p className="description">40 músicas • 20 minutos</p>
                </div>
              </button>
            </div>
          </S.MainContentRight>
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
};

export { Home };
