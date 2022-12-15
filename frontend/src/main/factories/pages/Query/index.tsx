import { FunctionComponent ,useState} from "react";
import styles from "./Consulta.module.css";

export const Query: FunctionComponent = () => {

  const [matricula, setMatricula] = useState("");
  const [comarcaImb, setComarcaImb] = useState("");
  const [comarca, setComarca] = useState("");
  const [mapAddress, setMapAddress] = useState("");

  return (
    <div  className={styles.Container}>
      <div className={styles.headerTitle}>
        <h6 className={styles.title}>
           Consulte o imóvel ou confrontação de mapas de regiões rurais
        </h6>
      </div>

      <div className={styles.rectangleDiv7} />

      <div className={styles.Querys}>
          <div className={styles.Quad1}>
            <input
              onChange={(e) => setMatricula(e.target.value)}
              type="text"
              id="name"
              name="numberOficio"
              required className={styles.input}
              placeholder="Numero da Matricula: "
            />
            <input
              onChange={(e) => setComarca(e.target.value)}
              type="text"
              id="name"
              name="numberOficio"
              required className={styles.input}
              placeholder="Comarca do imóvel: "
            />

            <button className={styles.group3}
              onClick={() => {
                console.log
              }}>
              <span>Consultar</span>
            </button>
          </div>
          <div className={styles.Quad2}>
            <input
              onChange={(e) => setMapAddress(e.target.value)}
              type="text"
              id="name"
              name="numberOficio"
              required className={styles.input}
              placeholder="Numero da Matricula: "
            />

            <input
              onChange={(e) => setComarcaImb(e.target.value)}
              type="text"
              id="name"
              name="numberOficio"
              required className={styles.input}
              placeholder="Numero da Matricula: "
            />

            <button className={styles.group3}
              onClick={() => {
                console.log
              }}>
              <span>Consultar</span>
            </button>
          </div>
      </div>

      <div className={styles.footerParagraph}>
        <p>
          Consulte se o imóvel está regulado ou não. A verificação de regularização é
          feita por Oráculo que usam dados fornecidos por entes autorizados.
        </p>
      </div>
  </div>
  );
};
