import React from "react";
import styled from "styled-components";
import { FaEdit, FaAsterisk } from "react-icons/fa";
import "./css/card.css";

const Div = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 1rem;
  background: #1874cd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;

const P = styled.p`
  color: #fff;
`;

const Sub = styled.p`
  font-size: 0.75rem;
  color: #00bfff;
`;

const Span = styled.span`
  font-weight: 500;
`;

const Icones = styled.div`
  font-size: 0.75rem;
  color: #1874cd;
  display: flex;
`;

const CardTopo = ({ texto, destaqueTexto }) => {
  return (
    <>
      <Div>
        <Container>
          <P>
            {texto} <Span>{destaqueTexto}</Span>
          </P>
          <Sub>View All</Sub>
        </Container>
        <Icones>
          <div className="cardIcones">
            <FaEdit />
          </div>
          <div className="cardIcones">
            <FaAsterisk />
          </div>
        </Icones>
      </Div>
    </>
  );
};

export default CardTopo;
