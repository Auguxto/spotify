import React from "react";

import * as S from "./styles";

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.Left>
        <S.Moments>
          <S.MementsHeader>
            <S.MementsTitle>Melhores do momento</S.MementsTitle>
            <S.SeeAll>Ver todos</S.SeeAll>
          </S.MementsHeader>
          <S.MomentsList>
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
            <S.MomentsCard />
          </S.MomentsList>
        </S.Moments>
      </S.Left>
      <S.Right />
    </S.Container>
  );
};

export { Main };
