import { FunctionComponent } from "react";
import styles from "./AreaInvestor.module.css";

export const Fiis: FunctionComponent = () => {
  return (
    <div className={styles.reaDoInvestidor}>
      <img className={styles.effectIcon} alt="" src="/effect.svg" />

      <div className={styles.reaDoInvestidor1}>Área do investidor</div>
      <div className={styles.escolhaSeuAtivoEInvistaEm}>
        Escolha seu ativo e invista em FIIs da união
      </div>
      <div className={styles.fIIsTokenizados}>FIIs Tokenizados</div>
      <div className={styles.group}>
        <div className={styles.rectangleDiv} />
        <b className={styles.logstica}>Logística</b>
      </div>
      <div className={styles.group1}>
        <div className={styles.rectangleDiv1} />
        <b className={styles.investir}>Investir</b>
      </div>

    </div>
  );
};

