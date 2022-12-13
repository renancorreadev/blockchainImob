import { FunctionComponent } from "react";
import styles from "./Consulta.module.css";

export const Query: FunctionComponent = () => {
  return (
    <div className={styles.consulta}>
      <img className={styles.effectIcon} alt="" src="/effect.svg" />
      <div className={styles.consulteSeOImvelEstRegu}>
        Consulte se o imóvel está regulado ou não. A verificação de
        regularização é feita por Oráculo que usam dados fornecidos por entes
        autorizados.
      </div>
      <div className={styles.consulteOImvelOuConfronta}>
        Consulte o imóvel ou confrontação de mapas de regiões rurais
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.insiraOLinkReferenteAoMap}>
          Insira o link referente ao mapa da região
        </div>
        <div className={styles.group}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.nmeroDaMatrcula}>Número da matrícula</b>
        </div>
        <div className={styles.group1}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.comarcaDoImvel}>Comarca do imóvel</b>
        </div>
        <div className={styles.group2}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.comarcaDoImvel}>Comarca do imóvel</b>
        </div>
        <div className={styles.group3}>
          <div className={styles.rectangleDiv4} />
          <b className={styles.registrar}>Registrar</b>
        </div>
        <div className={styles.group4}>
          <div className={styles.rectangleDiv4} />
          <b className={styles.consultar}>Consultar</b>
        </div>
        <div className={styles.rectangleDiv6} />
      </div>
      <div className={styles.rectangleDiv7} />
    </div>
  );
};


