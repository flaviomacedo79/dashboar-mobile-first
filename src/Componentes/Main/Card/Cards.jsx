import React from "react";
import CardTopo from "./CardTopo";
import styled from "styled-components";

const SectionCards = styled.section`
  background-color: #fff;
  height: 100%;
`;

const DivCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

const Cards = (props) => {
  return (
    <>
      <SectionCards id={props.id}>
        <CardTopo texto={props.texto} destaqueTexto={props.destaqueTexto} />
        <DivCards>{props.children}</DivCards>
      </SectionCards>
    </>
  );
};

export default Cards;
