/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Register.module.css";
import Modal from "react-modal";

/**Web3 imports */
import { BlockImobContractConfig } from "../../../../utils/ContractConfigs";
import { abi } from "@utils/formatAbi/oracle-gov-abi";
import { useAccount } from "wagmi";
import { writeContract } from "@wagmi/core";
import { ethers } from "ethers";
import { success } from "./utils/effect";
import { CircleLoader } from "react-spinners";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Register: FunctionComponent = () => {
  const [oficio, setOficio] = useState("");
  const [comarcaimovel, setComarcaimovel] = useState("");
  const [numero, setNumero] = useState<number>();
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [isMinted, setIsMinted] = useState(false);
  const [transationHash, setTransationHash] = useState("");
  const [isStarted, SetisStarted] = useState(false);
  const [mintStatus, setMintStatus] = useState(0);

  const [circleLoading, setCircleLoading] = useState(true);

  /** Modals Configs */
  function closeModal() {
    setmodalIsOpen(false);
    setCircleLoading(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  /** connectWeb3 */
  const { address } = useAccount();
  const contractAddress = BlockImobContractConfig.contractAddress as string;
  let subtitle: any;

  async function mint() {
    if (address) {
      SetisStarted(true);
      try {
        const { wait } = await writeContract({
          mode: "recklesslyUnprepared",
          address: contractAddress,
          abi: abi,
          functionName: "mint",
          args: [address, oficio, comarcaimovel, ethers.BigNumber.from(numero)],
        });
        /**mint & set varibables */
        await wait().then((tx) => {
          setTransationHash(tx.transactionHash);
          SetisStarted(false);

          if (tx.status) {
            setMintStatus(tx.status);
          }

          setmodalIsOpen(false);
        });

        setIsMinted(true);
      } catch (e) {
        console.log(e);
        setmodalIsOpen(false);
      }
    }
  }

  useEffect(() => {
    if (isMinted) {
      success();
    }
  }, [isMinted]);

  useEffect(() => {
    if (isStarted === true || mintStatus === 1) {
      setmodalIsOpen(true);
    } else if (mintStatus === 0) {
      setmodalIsOpen(true);
    } else {
      setmodalIsOpen(false);
    }
  }, [isStarted, mintStatus]);

  return (
    <>
      <div className={styles.groupForm} id="register">
        <h1 className={styles.title}>Registro com conta autorizada</h1>

        <div className={styles.rectangleDiv}>
          <div className={styles.inputsContainer}>
            <div className={styles.group1}>
              <input
                onChange={(e) => setOficio(e.target.value)}
                type="text"
                id="name"
                name="numberOficio"
                required
                className={styles.input}
                placeholder="Name (4 to 8 characters):"
              />
            </div>

            <div className={styles.group2}>
              <input
                type="text"
                id="comarcaimovel"
                name="comarcaimovel"
                required
                className={styles.input}
                placeholder="Comarca"
                onChange={(e) => setComarcaimovel(e.target.value)}
              />
            </div>

            <div className={styles.group4}>
              <input
                type="number"
                id="comarcaimovel"
                name="comarcaimovel"
                required
                className={styles.input}
                placeholder="Número"
                onChange={(e) => setNumero(parseInt(e.target.value))}
              />
            </div>
          </div>

          <button
            className={styles.group3}
            onClick={() => {
              mint?.();
            }}
          >
            <div className={styles.rectangleButton} />
            <b className={styles.registrar}>Registrar</b>
          </button>
        </div>

        <p className={styles.paragraph}>
          O registro deve ser feito por agente autorizado pela União e os dados
          serão verificados antes do registro de fato.
        </p>

        {isStarted && (
          <>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Modal Minting"
            >
              <button
                onClick={() => setmodalIsOpen(!modalIsOpen)}
                className={styles.closeModal}
              >
                X
              </button>
              <div className={styles.status}>
                <h2 className={styles.titleModal}>
                  Registrando Imovel na Blockchain Celo...
                </h2>
                <div className={styles.imageLoadingContainer}>
                  <CircleLoader
                    color="#5400d3"
                    loading={circleLoading}
                    size={450}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              </div>
            </Modal>
          </>
        )}
        {isMinted && (
          <>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button
                onClick={() => setmodalIsOpen(!modalIsOpen)}
                className={styles.closeModaSucess}
              >
                X
              </button>
              <div className={styles.action}>
                <h2 className={styles.titleModal}>
                  Imovel Registrado com Sucesso!
                </h2>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.sucessgif}
                    src="/public/sucess.gif"
                    alt=""
                  />
                </div>
                <div className={styles.paragraphContainer}>
                  <p className={styles.paragraphModal}>
                    O imovel foi registrado com sucesso na blockchain Celo.
                  </p>
                  <p className={styles.paragraphModal}>
                    O hash da transação é:{" "}
                    <a
                      href={`https://explorer.celo.org/alfajores/tx/${transationHash}`}
                    >
                      {transationHash}
                    </a>
                  </p>
                </div>
              </div>
            </Modal>
          </>
        )}
      </div>
    </>
  );
};
