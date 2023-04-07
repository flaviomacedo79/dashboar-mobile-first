import React from "react";
import "./css/main-grid.css";

const MainGrid = ({
  cOv_0,
  cOv_1,
  cOv_2,
  cOv_3,
  cCdd,
  cCd_0,
  cCd_1,
  idOv_0,
  idOv_1,
  idOv_2,
  idOv_3,
  idCdd,
  idCd_0,
  idCd_1,
}) => {
  return (
    <>
      <section className="div-main">
        <article className="main-grid">
          <div className={idOv_0}>{cOv_0}</div>
          <div className={idOv_1}>{cOv_1}</div>
          <div className={idOv_2}>{cOv_2}</div>
          <div className={idOv_3}>{cOv_3}</div>
          <div className={idCdd}>{cCdd}</div>
          <div className={idCd_0}>{cCd_0}</div>
          <div className={idCd_1}>{cCd_1}</div>
        </article>
      </section>
    </>
  );
};

export default MainGrid;
