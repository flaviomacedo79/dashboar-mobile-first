import React from "react";
import styled from "styled-components";
import styles from "./css/CardDestaqueComponente.module.css";
import stylesOverView from "../../OverViewCard/css/OverViewCard.module.css";
import { FaGift, FaPlane, FaRegFileAlt, FaHeart } from "react-icons/fa";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
`;

const Ul = styled.ul`
  max-width: 500px;
  display: flex;
`;

const Li = styled.li`
  font-size: 0.625rem;
  color: #777777;
  padding-left: 20px;
`;

const SpanAzul = styled.span`
  width: 5px;
  right: -15px;
  top: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  background: #00bfff;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #ffffff;
`;

const SpanVermelho = styled.span`
  width: 5px;
  right: -15px;
  top: 30px;
  position: absolute;
  width: 30px;
  height: 30px;
  background: #ff2400;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #ffffff;
`;

const H2CardDestaque = styled.h2`
  color: #00bfff;
`;

const PCardDestaque = styled.p`
  font-size: 0.75rem;
  color: #000000;
`;

const CardDestaqueComponente = (props) => {
  return (
    <>
      <Section>
        <Ul>
          <Li className={styles.cardDestaqueLiEsquerda}>
            Today
            <SpanAzul className={stylesOverView.azul}>
              <FaGift />
            </SpanAzul>
          </Li>
          <Ul className={styles.cardDestaqueLista}>
            <Li>
              <H2CardDestaque>Jonathan G</H2CardDestaque>
            </Li>
            <Li>
              <PCardDestaque>
                Going away party at 8:30 pm. Bring a friend!
              </PCardDestaque>
            </Li>
            <Li>
              <PCardDestaque className={styles.cardDestaqueBaixo}>
                1404 Gibson St.
              </PCardDestaque>
            </Li>
          </Ul>
        </Ul>
        <Ul>
          <Li className={styles.cardDestaqueLiEsquerda}>
            Tuesday
            <SpanVermelho className={stylesOverView.azul}>
              <FaPlane />
            </SpanVermelho>
          </Li>
          <Ul className={styles.cardDestaqueLista}>
            <Li>
              <H2CardDestaque>Mathew H</H2CardDestaque>
            </Li>
            <Li>
              <PCardDestaque>Flying to Bora at 4:30pm.</PCardDestaque>
            </Li>
            <Li>
              <PCardDestaque className={styles.cardDestaqueBaixo}>
                Delta, Gate 27B.
              </PCardDestaque>
            </Li>
          </Ul>
        </Ul>
        <Ul>
          <Li className={styles.cardDestaqueLiEsquerda}>
            Thurday
            <SpanAzul className={stylesOverView.azul}>
              <FaRegFileAlt />
            </SpanAzul>
          </Li>
          <Ul className={styles.cardDestaqueLista}>
            <Li>
              <H2CardDestaque>National Institute of Science</H2CardDestaque>
            </Li>
            <Li>
              <PCardDestaque>
                Join the institute for an in-depth look at Stephen Hawking.
              </PCardDestaque>
            </Li>
            <Li>
              <PCardDestaque className={styles.cardDestaqueBaixo}>
                7:30pm, Carnegie Center for Science.
              </PCardDestaque>
            </Li>
          </Ul>
        </Ul>
        <Ul>
          <Li className={styles.cardDestaqueLiEsquerda}>
            Friday
            <SpanVermelho className={stylesOverView.azul}>
              <FaHeart />
            </SpanVermelho>
          </Li>
          <Ul className={styles.cardDestaqueLista}>
            <Li>
              <H2CardDestaque>24th Annual Heart Ball</H2CardDestaque>
            </Li>
            <Li>
              <PCardDestaque>
                Join us and contribute to your favorite local charity.
              </PCardDestaque>
            </Li>
            <Li>
              <PCardDestaque className={styles.cardDestaqueBaixo}>
                6:45pm, Austin Convention Ctr.
              </PCardDestaque>
            </Li>
          </Ul>
        </Ul>
        <Ul>
          <Li className={styles.cardDestaqueLiEsquerda}>
            Saturday
            <SpanAzul className={stylesOverView.azul}>
              <FaHeart />
            </SpanAzul>
          </Li>
          <Ul className={styles.cardDestaqueLista}>
            <Li>
              <H2CardDestaque>Little Rock Air Show</H2CardDestaque>
            </Li>
            <Li>
              <PCardDestaque>
                See the Blue Angels fly with roaring thunder.
              </PCardDestaque>
            </Li>
            <Li>
              <PCardDestaque className={styles.cardDestaqueBaixo}>
                11:00pm, Jacksonville Airforce Base.
              </PCardDestaque>
            </Li>
          </Ul>
        </Ul>
      </Section>
    </>
  );
};

export default CardDestaqueComponente;
