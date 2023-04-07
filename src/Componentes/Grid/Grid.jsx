import React from "react";
import "./css/grid.css";
const Grid = ({ aside, header, main, footer }) => {
  return (
    <>
      <main className="grid">
        <aside className="aside">{aside}</aside>
        <header className="header">{header}</header>
        <section className="main">{main}</section>
        <footer className="footer">{footer}</footer>
      </main>
    </>
  );
};

export default Grid;
