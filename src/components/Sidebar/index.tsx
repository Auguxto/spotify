import React from "react";
import {
  DollarSign,
  Home,
  Search,
  Library,
  PlusSquare,
  Heart,
} from "lucide-react";

import * as S from "./styles";

import Anaju_Mendes from "../../assets/artists/Anaju_Mendes.png";
import Japa from "../../assets/artists/Japa.png";
import Krawk from "../../assets/artists/Krawk.png";
import Ucla from "../../assets/artists/Ucla.png";

const Sidebar: React.FC = () => {
  return (
    <S.Container>
      <S.Logo />
      <S.CardPremium>
        <S.CardIcon />
        <S.CardTexts>
          <S.CardTitle>Spotify Premium</S.CardTitle>
          <S.CardDescription>Visualizar benefícios</S.CardDescription>
        </S.CardTexts>
        <S.CardButton>
          <DollarSign size={30} color="#5C677D" />
        </S.CardButton>
      </S.CardPremium>
      <S.Navigation>
        <S.NavItem active>
          <Home size={20} color="#00F388" />
          <S.NavTitle active>Home</S.NavTitle>
        </S.NavItem>
        <S.NavItem>
          <Search size={20} color="#5C677D" />
          <S.NavTitle>Buscar</S.NavTitle>
        </S.NavItem>
        <S.NavItem>
          <Library size={20} color="#5C677D" />
          <S.NavTitle>Sua biblioteca</S.NavTitle>
        </S.NavItem>
        <S.NavItem>
          <PlusSquare size={20} color="#5C677D" />
          <S.NavTitle>Criar nova playlist</S.NavTitle>
        </S.NavItem>
        <S.NavItem>
          <Heart size={20} color="#5C677D" />
          <S.NavTitle>Músicas curtidas</S.NavTitle>
        </S.NavItem>
      </S.Navigation>
      <S.Recents>
        <S.RecentsTitle>Artistas recentes</S.RecentsTitle>
        <S.Artist>
          <S.ArtistIcon src={Krawk} />
          <div>
            <S.ArtistName>
              Krawk <S.Verified />{" "}
            </S.ArtistName>
          </div>
        </S.Artist>
        <S.Artist>
          <S.ArtistIcon src={Anaju_Mendes} />
          <div>
            <S.ArtistName>Anaju Mendes</S.ArtistName>
          </div>
        </S.Artist>
        <S.Artist>
          <S.ArtistIcon src={Japa} />
          <div>
            <S.ArtistName>
              JAPA <S.Verified />
            </S.ArtistName>
          </div>
        </S.Artist>
        <S.Artist>
          <S.ArtistIcon src={Ucla} />
          <div>
            <S.ArtistName>UCLA</S.ArtistName>
          </div>
        </S.Artist>
      </S.Recents>
    </S.Container>
  );
};

export { Sidebar };
