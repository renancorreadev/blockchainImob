import { FunctionComponent } from "react";
import styles from "./AreaInvestor.module.css";
import { ConsultGovWrites } from "../../../../data/useCases/consult-gov-writes";
import { useAccount } from "wagmi";
import { BigNumber } from "ethers";

export const Fiis: FunctionComponent = () => {
  const consultGovInstance = new ConsultGovWrites();
  const { address } = useAccount();

  /** Sets */
  async function setRegular() {
    const _idImob = BigNumber.from(1);
    const _regular = true;

    if (address) {
      await consultGovInstance
        .setRegular({
          _idImob,
          _regular,
        })
        .then((res) => {
          console.log(res);
        });
    }
  }

  async function setMapRural() {
    const _mapTokenIPFS =
      "https://bafkreie7ylmkqhbixuz7svqv6wsw5atitzcuij7m4iqrvvu3bc4re2p3qy.ipfs.nftstorage.link/";

    if (address) {
      await consultGovInstance
        .setMapRural({
          _registryRuralIPFS: _mapTokenIPFS,
        })
        .then((res) => {
          console.log(res);
        });
    }
  }

  // async function confrontMap() {
  //   const _mapTokenIPFS =
  //     "https://bafkreie7ylmkqhbixuz7svqv6wsw5atitzcuij7m4iqrvvu3bc4re2p3qy.ipfs.nftstorage.link/";

  //   if (address) {
  //     await consultGovInstance
  //       .confrontMap({
  //         _registryRuralIPFS: _mapTokenIPFS,
  //         _registryRural: BigNumber.from(1),
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   }
  // }

  return (
    <div className={styles.reaDoInvestidor}>
      {/* <img className={styles.effectIcon} alt="" src="/effect.svg" />

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
      </div> */}
      {/*
      <button onClick={setRegular}>Set Regular</button>

      <button onClick={setMapRural}>Set MapRural</button>

      <button onClick={confrontMap}>Confront Map</button> */}
    </div>
  );
};
