import { FunctionComponent } from "react";
import styles from "./Register.module.css";

export const Register: FunctionComponent = () => {
  return (
    <div className={styles.registro}>
      <img className={styles.effectIcon} alt="" src="/effect.svg" />
      <div className={styles.oRegistroDeveSerFeitoPor}>
        O registro deve ser feito por agente autorizado pela União e os dados
        serão verificados antes do registro de fato.
      </div>
      <div className={styles.registroComContaAutorizada}>
        Registro com conta autorizada
      </div>
      <form
        className={styles.groupForm}
        method="post"
        id="register"
      >
        <div className={styles.rectangleDiv} />
        <button className={styles.group}>
          <button className={styles.rectangleButton} />
          <b className={styles.nmeroDaMatrculaRIP}>Número da matrícula - RIP</b>
        </button>
        <button className={styles.group1}>
          <button className={styles.rectangleButton} />
          <b className={styles.nmeroDoOfcio}>Número do ofício</b>
        </button>
        <button className={styles.group2}>
          <button className={styles.rectangleButton} />
          <b className={styles.comarcaDoImvel}>Comarca do imóvel</b>
        </button>
        <div className={styles.group3}>
          <div className={styles.rectangleDiv1} />
          <b className={styles.registrar}>Registrar</b>
        </div>
      </form>
    </div>
  );
};

