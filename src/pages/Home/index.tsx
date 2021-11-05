import React from "react";
import { Bell } from "lucide-react";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import krawk from "../../assets/artists/Krawk.png";
import Anaju_Mendes from "../../assets/artists/Anaju_Mendes.png";

import * as S from "./styles";
import Player from "../../components/Player";

const Home: React.FC = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Header />
        <Main></Main>
        <Player />
      </S.Content>
    </S.Container>
  );
};

export { Home };
