import React from "react";
import CardTopo from "./CardTopo";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff;
  height: 100%;
`;

const Div = styled.div`
  width: 100%;
`;

const Cards = (props) => {
  return (
    <>
      <Section id={props.id}>
        <CardTopo texto={props.texto} destaqueTexto={props.destaqueTexto} />
        <Div>{props.children}</Div>
      </Section>
    </>
  );
};

export default Cards;
