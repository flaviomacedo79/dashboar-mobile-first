import React from "react";
import MainGrid from "./MainGrid/MainGrid";
import OverViewCard from "./OverViewCard/OverViewCard";
import CardDestaque from "./Card/CardDestaque";
import Cards from "./Card/Cards";
import "./MainGrid/css/main-grid.css";
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
          <h1>asdlkçfjalskdf</h1>
          <h1>asdlkçfjalskdf</h1>
        </Cards>
      }
      cCd_1={
        <Cards texto="Monthly" destaqueTexto="Speding" txt="traatawfasdf" />
      }
    />
  );
};

export default Main;
