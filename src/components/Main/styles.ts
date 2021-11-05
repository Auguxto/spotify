import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;

  grid-template-areas: "left-content right-content";

  width: 100%;
  max-width: 100%;
  height: 100%;

  padding: 30px;

  gap: 30px;
`;

export const Left = styled.div`
  max-width: 100%;
  height: 100%;

  grid-area: left-content;

  position: relative;
`;

export const Moments = styled.div`
  display: flex;

  flex-direction: column;

  position: relative;

  height: 229px;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 5px;
`;

export const MementsHeader = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: space-between;

  padding: 20px;
`;

export const MementsTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: #ffffff;
`;

export const SeeAll = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #5c677d;

  cursor: pointer;
`;

export const MomentsList = styled.div`
  display: flex;

  gap: 16px;

  margin-left: 20px;
`;

export const MomentsCard = styled.div`
  width: 110px;
  height: 147.66px;

  background: rgba(255, 255, 255, 0.04);

  border-radius: 5px;

  padding: 10px;
`;

export const Right = styled.div`
  width: 344px;
  height: 100%;

  grid-area: right-content;
`;
