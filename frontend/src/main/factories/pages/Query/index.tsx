import { FunctionComponent, useState } from "react";
import styles from "./Consulta.module.css";

import { ConsultGovReads, ConsultGovWrites } from "@data/useCases/";

export const Query: FunctionComponent = () => {
  const consultReadInstance = new ConsultGovReads();
  const consultWriteInstance = new ConsultGovWrites();

  /** Input Values States  */
  const [inputMatricula, setInputMatricula] = useState("");
  const [inputURIMap, setInputURIMap] = useState("");
  const [inputNumeroMatricula, setInputNumeroMatricula] = useState("");

  /** Result Values States */
  const [resultMatricula, setResultMatricula] = useState<boolean | undefined>();

  /** Functions */
  const handleConsult = async () => {
    await consultReadInstance
      .getConsultRegular(Number(inputMatricula))

      .then((result) => {
        setResultMatricula(result);
      });
  };
  const handleConsultMap = async () => {
    await consultWriteInstance.confrontMap({
      _registryRuralIPFS: inputURIMap,
      _registryRural: Number(inputNumeroMatricula),
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.headerTitle}>
        <h6 className={styles.title}>
          Consulte o imóvel ou confrontação de mapas de regiões rurais
        </h6>
      </div>

      <div className={styles.Querys}>
        <div className={styles.Quad1}>
          <input
            onChange={(e) => setInputMatricula(e.target.value)}
            type="text"
            id="name"
            name="numberOficio"
            required
            className={styles.input}
            placeholder="Numero da Matricula: "
          />

          <button className={styles.group3} onClick={handleConsult}>
            <span>Consultar</span>
          </button>

          {/** Returns */}
          {resultMatricula && <p>Imovel esta regularizado</p>}
          {!resultMatricula && <p>Imovel não esta regularizado</p>}
        </div>
        <div className={styles.Quad2}>
          <input
            onChange={(e) => setInputURIMap(e.target.value)}
            type="text"
            id="name"
            name="numberOficio"
            required
            className={styles.input}
            placeholder="Insira o link referente ao mapa da região"
          />

          <input
            onChange={(e) => setInputNumeroMatricula(e.target.value)}
            type="text"
            id="name"
            name="numberOficio"
            required
            className={styles.input}
            placeholder="Numero da Matricula: "
          />

          <button className={styles.group3} onClick={handleConsultMap}>
            <span>Consultar</span>
          </button>
        </div>
      </div>

      <div className={styles.footerParagraph}>
        <p>
          Consulte se o imóvel está regulado ou não. A verificação de
          regularização é feita por Oráculo que usam dados fornecidos por entes
          autorizados.
        </p>
      </div>
    </div>
  );
};
