import styled from "styled-components";

const Header = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
`;

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // margin-left: 20vw;
`;

const ItemText = styled.h2`
  text-align: center;
  font-family: Bungee;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  color: rgba(19, 86, 70, 100);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  margin: 0;
  // position: fixed;
  // bottom: 2%;
  // width: 100vw;
`;

const BlackBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 20%;
`;

const RecycleBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  margin-left: -107px;
`;

const CompostBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20%;
`;

const GameItem = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  margin-left: -80px;
`;

export {
  Header,
  LivesContainer,
  BlackBinBox,
  RecycleBinBox,
  CompostBinBox,
  GameItem,
  ItemText,
};
