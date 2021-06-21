import React,{useState} from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross,
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg"; 
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import  ApplePNG  from "../../assets/apple.png"; 
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";

const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345c;
  filter: drop-shadow(4px 4px 4px #08345c);
  text-align: center;
`;


const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const CertificateModal = ({ handleClose }) => {
  const [name, updateName] = useState("");
  return (
    <FunFactsBox>
      <CloseCross onClick={handleClose} />
      <PageHeader>Certificate of Appreciation</PageHeader>
      <MessageBox primary>
        <BoxMessage>
        <form
        onSubmit={(e) => {
          e.preventDefault();
          // requestPets();
        }}
      ></form>

      
      <label htmlFor="location">
          Enter your name
          <input
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => updateName(e.target.value)}
          />
        </label>
         
    
      
        </BoxMessage>
      </MessageBox>

      <Button primary handleClick={handleClose} label="Close"></Button>
    </FunFactsBox>
  );
};

export default CertificateModal;
