import React from "react";
import CardTopo from "./CardTopo";
import CardDestaqueComponente from "./CardDestaque/CardDestaqueComponente";
import styled from "styled-components";

const Section = styled.section`
  background: #ffffff;
  height: 100%;
`;

const CardDestaque = (props) => {
  return (
    <>
      <Section id={props.id}>
        <CardTopo texto={props.texto} destaqueTexto={props.destaqueTexto} />
        <CardDestaqueComponente />
      </Section>
    </>
  );
};

export default CardDestaque;
