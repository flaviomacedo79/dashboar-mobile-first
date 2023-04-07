import React from "react";
import MainGrid from "./MainGrid/MainGrid";
import OverViewCard from "./OverViewCard/OverViewCard";
import CardDestaque from "./Card/CardDestaque";
import Cards from "./Card/Cards";
import "./MainGrid/css/main-grid.css";
import imagem from "./img/capa.jpg";
import grafico from "./img/grafico.jpg";
import "./Css/cards.css";
import {
  AiFillFileText,
  AiFillCalendar,
  AiFillMail,
  AiFillPicture,
} from "react-icons/ai";

const Main = () => {
  return (
    <MainGrid
      idOv_0="overviewcard0"
      idOv_1="overviewcard1"
      idOv_2="overviewcard2"
      idOv_3="overviewcard3"
      idCdd="carddestaque"
      idCd_0="card0"
      idCd_1="card1"
      cOv_0={
        <OverViewCard
          icon={<AiFillFileText />}
          classe="laranja"
          texto="new"
          destaqueTexto="Document"
          sobreTexto="europe trip"
        />
      }
      cOv_1={
        <OverViewCard
          icon={<AiFillCalendar />}
          classe="verde"
          texto="uppcoming"
          destaqueTexto="Event"
          sobreTexto="chili cookoff"
        />
      }
      cOv_2={
        <OverViewCard
          icon={<AiFillMail />}
          classe="vermelho"
          texto="recent"
          destaqueTexto="Emails"
          sobreTexto="+10"
        />
      }
      cOv_3={
        <OverViewCard
          icon={<AiFillPicture />}
          classe="roxo"
          texto="new"
          destaqueTexto="Album"
          sobreTexto="house concert"
        />
      }
      cCdd={<CardDestaque texto="Your" destaqueTexto="Events" />}
      cCd_0={
        <Cards texto="Recent" destaqueTexto="Documents">
          <div class="cardsDiagramacao">
            <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>
          </div>

          <div class="cardsDiagramacao">
            <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>
          </div>

          <div class="cardsDiagramacao">
            <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>
          </div>

          <div class="cardsDiagramacao">
            <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>
          </div>

          {/* <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>

            <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>

            <div>
              <img
                class="cardsImg"
                src={imagem}
                alt="Img Documento"
                title="Documento imagem"
              />
              <div class="cardsTxt">
                <p>tesla-parents</p>
                <h6>07/16/2018</h6>
              </div>
            </div>
          </div> */}
        </Cards>
      }
      cCd_1={
        <Cards texto="Monthly" destaqueTexto="Speding">
          <img
            src={grafico}
            alt="Imagem de Gráfico"
            title="Imagem Gráfico meramente ilustratico"
          />
        </Cards>
      }
    />
  );
};

export default Main;
