import { FunctionComponent } from "react";
import styles from "./Video.module.css";

export const Video: FunctionComponent = () => {
  return (
    <div className={styles.vdeo}>
      <img className={styles.effectIcon} alt="" src="/effect4.svg" />

      <div className={styles.vdeoPlayer}>
        <div className={styles.rectangleDiv} />
        <img className={styles.playIcon} alt="" src="../play.svg" />
      </div>
      <div className={styles.totalmenteAuditvelEComTod}>
        Totalmente auditável e com todas as informações públicas registradas em
        um sistema distribuído. O funcionamento dos Oráculos é na inserção de
        dados off-chain e validação por entes reguladores dando mais segurança e
        veracidade nas informações dos imóveis.
      </div>
      <div className={styles.apsAVerificaoDosDadosE}>
        Após a verificação dos dados e confirmação que o imóvel está regular,
        ele entra nas possibilidades de venda e cessão de uso. Assim, todo o
        registro e gestão referente a cada venda e cessão será feita via
        blockchain e os valores pagos em stablecoin lastreada em real (cREAL) ou
        com a implementação do real digital (CBDC).
      </div>
      <div className={styles.porFimOSistemaPermiteQue}>
        Por fim, o sistema permite que a união faça seus FIIs utilizando a
        tokenização de ativos e possibilitando a contas cadastradas na
        plataforma comprar os ativos e receberem os dividendos em cREAL ou CBDC.
      </div>
      <div className={styles.somosUmaPlataformaOpenSourc}>
        Somos uma plataforma OpenSource
      </div>
    </div>
  );
};

