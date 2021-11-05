import styled, { css } from "styled-components";

import spotify_form from "../../assets/spotify_form.png";
import card_premium from "../../assets/card_premium.png";
import verified from "../../assets/verified.png";

const active = css`
  background: rgba(255, 255, 255, 0.03);
  ::before {
    content: "";

    position: absolute;

    right: 0;

    width: 4px;
    height: 70%;

    background: #00f388;

    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  grid-area: side-bar;

  width: 400px;
  height: 100vh;

  background: linear-gradient(
      180deg,
      rgba(7, 1, 37, 0.2) 0%,
      rgba(0, 243, 136, 0.2) 100%
    ),
    #070125;
`;

export const Logo = styled.img.attrs({
  src: spotify_form,
  onDragStart: (e) => e.preventDefault(),
})`
  width: 186.41px;
  height: 58px;
  margin-top: 40px; ;
`;

export const CardPremium = styled.div`
  display: flex;

  align-items: center;

  width: 328px;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.04);

  margin-top: 50px;

  padding: 20px;
`;

export const CardIcon = styled.img.attrs({
  src: card_premium,
  onDragStart: (e) => e.preventDefault(),
})`
  width: 50px;
  height: 60px;
`;

export const CardTexts = styled.div`
  margin-left: 20px;
`;

export const CardTitle = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: #ffffff;
`;

export const CardDescription = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #5c677d;
`;

export const CardButton = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 5px;
  transform: rotate(180deg);

  border: none;

  cursor: pointer;

  margin-left: 50px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 45px;
`;

export const NavItem = styled.button<{ active?: boolean }>`
  display: flex;

  align-items: center;

  position: relative;

  background: transparent;

  width: 100%;
  height: 60px;

  padding-left: 40px;

  border: none;

  cursor: pointer;

  ${(props) => (props.active ? active : null)}

  :hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const NavTitle = styled.p<{ active?: boolean }>`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: ${(props) => (props.active ? "#00f388" : "#5C677D")};

  margin-left: 10px;
`;

export const Recents = styled.div`
  display: flex;
  width: 90%;

  flex-direction: column;

  align-self: flex-start;

  margin-top: 25px;
  margin-left: 40px;

  margin-bottom: 30px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }
`;

export const RecentsTitle = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;

export const Artist = styled.button`
  display: flex;

  align-items: center;

  background: transparent;

  border: none;

  margin-top: 25px;

  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;

    margin-left: 20px;

    align-items: center;
  }
`;

export const ArtistIcon = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 5px;
`;

export const ArtistName = styled.p`
  display: flex;

  align-items: center;

  gap: 5px;

  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;

export const Verified = styled.img.attrs({
  src: verified,
})`
  width: 15px;
  height: 15px;
`;
