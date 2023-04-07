import React from "react";
import Grid from "./Componentes/Grid/Grid";
import Aside from "./Componentes/Aside/Aside";
import Header from "./Componentes/Header/Header";
import Main from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        aside={<Aside />}
        header={<Header />}
        main={<Main />}
        footer={<Footer />}
      />
    </>
  );
}

export default App;
