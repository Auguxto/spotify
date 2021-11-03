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
  display: flex;
  max-width: 100vw;
  min-height: 100vh;

  background: linear-gradient(
      179.96deg,
      rgba(45, 38, 61, 0.2) 2.02%,
      rgba(0, 243, 136, 0.2) 99.97%
    ),
    #080226;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;

  padding: 0 30px;

  margin-top: 40px;

  .main {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  }
`;

export const GoodNight = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  /* identical to box height */

  color: #ffffff;
`;

export const UserCard = styled.div`
  display: flex;

  align-items: center;

  width: 342px;
  height: 96px;

  border-radius: 5px;
  background: rgba(255, 255, 255, 0.04);

  padding: 22px;
`;

export const CardIcon = styled.img.attrs({
  src: avatar,
  onDragStart: (e) => e.preventDefault(),
})`
  width: 50px;
  height: 50px;
`;

export const CardTexts = styled.div`
  margin-left: 20px;
`;

export const CardName = styled.p`
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

export const CardNotifications = styled.button`
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

  transform: rotate(180deg);
`;

export const Categories = styled.div`
  display: flex;

  height: 40px;

  gap: 40px;

  border-bottom: 1px solid rgba(90, 111, 124, 0.3);
`;

export const Categorie = styled.button<{ active?: boolean }>`
  display: flex;

  justify-content: center;

  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  border: none;

  cursor: pointer;

  position: relative;

  background: transparent;

  color: ${(props) => (props.active ? "#FFFFFF" : "#5C677D")};

  ${(props) => (props.active ? active : null)}
`;

export const MainContent = styled.div`
  display: flex;
  flex: 1;

  gap: 30px;

  margin: 30px;
`;

export const MainContentLeft = styled.div`
  display: flex;

  flex-direction: column;

  flex: 1;
`;

export const BestMoments = styled.div`
  display: flex;

  flex-direction: column;

  height: 229px;

  background: rgba(255, 255, 255, 0.04);

  border-radius: 5px;

  .list {
    display: flex;
    width: 100%;

    gap: 16px;

    margin-left: 20px;

    .music {
      display: flex;
      flex-direction: column;

      width: 110px;

      background: rgba(255, 255, 255, 0.04);

      border: none;

      border-radius: 5px;

      padding: 10px;
      .thumb {
        width: 90px;
        height: 86.62px;
      }
      .texts {
        text-align: left;

        margin-top: 10px;

        .name {
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;

          color: #ffffff;
        }

        .artist {
          font-family: DM Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 10px;
          line-height: 13px;

          color: #5c677d;
        }
      }
    }
  }
`;

export const BestMomentsHeader = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  align-self: flex-start;
  justify-content: space-between;

  margin: 20px;

  .title {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #ffffff;
  }

  .see-all {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: #5c677d;

    cursor: pointer;

    transform: translateX(-50px);
  }
`;

export const LastMusics = styled.div`
  display: flex;

  width: 100%;
  height: 275px;

  background: rgba(255, 255, 255, 0.04);

  border-radius: 5px;

  margin-top: 30px;

  padding: 20px;

  .title {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #ffffff;
  }
`;

export const MainContentRight = styled.div`
  display: flex;

  flex-direction: column;

  width: 344px;

  background: rgba(255, 255, 255, 0.04);

  border-radius: 5px;

  padding: 20px;

  .title {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #ffffff;
  }

  .list {
    display: flex;
    flex-direction: column;

    gap: 20px;

    margin-top: 20px;

    .music {
      display: flex;

      align-items: center;

      background: transparent;

      border: none;

      cursor: pointer;

      .texts {
        margin-left: 16px;

        text-align: left;

        .name {
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 21px;

          color: #ffffff;
        }

        .description {
          font-family: DM Sans;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;

          color: #5c677d;
        }
      }
    }
  }
`;
