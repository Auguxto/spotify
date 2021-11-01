import styled from "styled-components";

import spotify_form from "../../assets/spotify_form.png";
import banner from "../../assets/banner.png";

export const Container = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;

  align-items: center;
  height: 100vh;

  background: #070125;
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;

  user-select: none;

  width: 80%;

  margin-top: 150px;
`;

export const Form = styled.div`
  display: flex;

  width: 334px;

  flex-direction: column;
`;

export const Logo = styled.img.attrs({
  src: spotify_form,
  onDragStart: (e) => e.preventDefault(),
})`
  width: 186.41px;
  height: 58px;
`;

export const Title = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;

  color: #ffffff;

  margin-top: 30px;
`;

export const Description = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: #5c677d;

  margin-top: 8px;
`;

export const InputsContainer = styled.div`
  display: flex;

  flex-direction: column;

  gap: 16px;

  margin-top: 34px;
`;

export const InputWrapper = styled.div`
  display: flex;

  align-items: center;

  width: 334px;
  height: 50px;

  border: 1.5px solid #5c677d;
  border-radius: 5px;

  padding: 0 10px;

  position: relative;
`;

export const InputTitle = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height */

  color: #5c677d;

  background: #070125;

  padding: 0 10px;

  position: absolute;

  top: -10px;
  left: 50px;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;

  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  margin-left: 10px;

  border: none;

  background: transparent;

  color: #ffffff;

  ::placeholder {
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: #ffffff;
  }
`;

export const InputButton = styled.button`
  width: 20px;
  height: 20px;

  background: transparent;
  border: none;

  cursor: pointer;
`;

export const ForgotPassword = styled.button`
  width: 150px;

  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #94a0b6;

  background: transparent;
  border: none;

  cursor: pointer;

  margin-top: 12px;
`;

export const FormButton = styled.button`
  display: flex;

  width: 334px;
  height: 50px;

  border-radius: 5px;

  align-items: center;
  justify-content: center;

  background: linear-gradient(
      91.41deg,
      rgba(0, 243, 136, 0.5) 0%,
      rgba(0, 194, 255, 0.5) 100.99%
    ),
    #00f388;

  border: none;

  cursor: pointer;

  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;

  color: #ffffff;

  margin-top: 12px;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Our = styled.p`
  display: flex;

  width: 100%;

  position: relative;

  align-items: center;
  justify-content: center;

  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #5c677d;

  z-index: 2;

  padding: 0 5px;

  background: #070125;

  margin-top: 8px;

  ::after {
    content: "";

    width: 100%;
    height: 2px;

    z-index: 1;

    position: absolute;

    bottom: 6px;

    background: rgba(90, 111, 124, 0.3);
  }
`;

export const RegisterButton = styled.button`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #94a0b6;

  background: transparent;
  border: none;

  cursor: pointer;

  margin-top: 5px;
`;

export const EnterButton = styled.button`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: #94a0b6;

  background: transparent;
  border: none;

  cursor: pointer;

  margin-top: 5px;
`;

export const Banner = styled.img.attrs({
  src: banner,
  onDragStart: (e) => e.preventDefault(),
})``;

export const Footer = styled.div``;
