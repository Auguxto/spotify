import styled, { css } from "styled-components";

import avatar from "../../assets/avatar.png";

const active = css`
  ::before {
    content: "";
    width: 80%;
    height: 2px;

    background: #00f388;

    position: absolute;

    bottom: 0;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;

  grid-template-areas: "side-bar main-content";

  max-height: 100vh;
  width: 100%;
  min-height: 100vh;

  background: linear-gradient(
      179.96deg,
      rgba(45, 38, 61, 0.2) 2.02%,
      rgba(0, 243, 136, 0.2) 99.97%
    ),
    #080226;
`;

export const Content = styled.div`
  display: grid;

  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;

  grid-area: main-content;

  grid-template-areas:
    "header-component header-component"
    "main-content-component main-content-component"
    "now-playing now-playing";

  height: 100%;
  max-height: 100vh;
`;

export const MainContent = styled.div`
  display: grid;

  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;

  grid-template-areas:
    "main-content-left main-content-right"
    "main-content-left main-content-right";

  grid-area: main-content-component;

  gap: 30px;

  margin: 30px;
`;
