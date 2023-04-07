import React from "react";
import styles from "./css/OverViewCard.module.css";

const OverViewCard = ({
  id,
  icon,
  classe,
  texto,
  destaqueTexto,
  sobreTexto,
}) => {
  return (
    <>
      <section id={id} className={styles.overviewCard}>
        <span className={styles[classe]}>{icon}</span>
        <div className={styles.overviewTexto}>
          <p className={styles.overviewEstilosTexto}>
            {texto}
            <span className={styles.overviewDestaqueTexto}>
              {destaqueTexto}
            </span>
          </p>
          <span className={styles.overviewSobreTexto}>{sobreTexto}</span>
        </div>
      </section>
    </>
  );
};

export default OverViewCard;
