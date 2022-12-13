import { FunctionComponent } from "react";
import styles from "./Sellers.module.css";

export const Sellers: FunctionComponent = () => {
  return (
    <div className={styles.vENDAECESSO}>
      <img className={styles.effectIcon} alt="" src="/effect.svg" />
      <div className={styles.conheaOsImveisDaUnio}>
        Conheça os imóveis da união à venda ou disponíveis para cessão de uso.
        Desburocratização e tecnologia aliados a confiança de imóveis regulares
        e verificados por oráculo de entes governamentais.
      </div>
      <div className={styles.vENDAECESSO1}>VENDA E CESSÃO</div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.imveisVenda}>Imóveis à venda</div>
        <div className={styles.imveisDisponveisParaCess}>
          Imóveis disponíveis para cessão
        </div>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-12@2x.png"
        />
        <div className={styles.rIP4004387ComarcaCuritiba}>
          <p className={styles.comarcaCuritibaPR}>
            <b className={styles.rIP}>{`RIP: `}</b>
            <span className={styles.span}>4004387</span>
          </p>
          <p className={styles.comarcaCuritibaPR}>
            <b className={styles.rIP}>{`Comarca: `}</b>
            <span className={styles.span}>Curitiba/PR</span>
          </p>
          <p className={styles.valorR800MilCreal}>
            <b className={styles.rIP}>Valor:</b>
            <span className={styles.span}> R$ 800 mil (Creal)</span>
          </p>
        </div>
        <img
          className={styles.rectangleIcon1}
          alt=""
          src="/rectangle-13@2x.png"
        />
        <div className={styles.rIP43679ComarcaSoPaulo}>
          <p className={styles.comarcaCuritibaPR}>
            <b className={styles.rIP}>{`RIP: `}</b>
            <span className={styles.span}>43679</span>
          </p>
          <p className={styles.comarcaCuritibaPR}>
            <b className={styles.rIP}>{`Comarca: `}</b>
            <span className={styles.span}>São Paulo/SP</span>
          </p>
          <p className={styles.valorR800MilCreal}>
            <b className={styles.rIP}>Valor:</b>
            <span className={styles.span}> R$ 750 mil (Creal)</span>
          </p>
        </div>
        <img
          className={styles.rectangleIcon2}
          alt=""
          src="/rectangle-14@2x.png"
        />
        <div className={styles.rIP890007ComarcaSoPaulo}>
          <p className={styles.comarcaCuritibaPR}>
            <b className={styles.rIP}>{`RIP: `}</b>
            <span className={styles.span}>890007</span>
          </p>
          <p className={styles.comarcaCuritibaPR}>
            <b className={styles.rIP}>{`Comarca: `}</b>
            <span className={styles.span}>São Paulo/SP</span>
          </p>
          <p className={styles.valorR800MilCreal}>
            <b className={styles.rIP}>Valor:</b>
            <span className={styles.span}> R$ 980 mil (Creal)</span>
          </p>
        </div>
      </div>
    </div>
  );
};
