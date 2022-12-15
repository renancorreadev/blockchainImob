/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FunctionComponent ,useEffect,useState} from "react";
import styles from "./Consulta.module.css";

import {readContract} from '@wagmi/core'
import {abi} from '../../../../infra/callbacks/abis/oracle-gov-abi'
import { BigNumber } from 'ethers';

import Modal from 'react-modal';
import { CircleLoader } from "react-spinners";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export const Query: FunctionComponent = () => {

  const [matricula, setMatricula] = useState("");
  const [numeroMatricula, setNumeroMatricula] = useState("");
  const [uriMap, setURIMap] = useState("");
  const [resultConsultRegular, setResultConsultRegular] = useState(false)
  const [resultConfrontMap, setResultConfrontMap] = useState<any>()

  const [openResultA, setOpenResultA] = useState(false)
  const [openResultB, setOpenResultB] = useState(false)

  const address = '0xB5F72BB1BCbB9f9564cfc46cD74899227366428F'



  const getRegular = async() : Promise<boolean | undefined> => {
      try {
        const txResult = await readContract({
          address,
          abi,
          functionName: 'ConsultRegular' ,
          args: [
            BigNumber.from(matricula),
          ],
        });

        return txResult
      } catch (e) {
        console.log(e)
      }

      return
  }

  const getconfrontMap = async() => {
    try {
      const txResult = await readContract({
        address,
        abi,
         //@ts-ignore
        functionName: 'confrontMap' ,
        args: [
         uriMap,
         BigNumber.from(numeroMatricula)
        ]
      });

      return txResult
    } catch (e) {
      console.log(e)
    }
  }

  // const getConsultMap = async() : Promise<boolean | undefined> => {
  //   try {
  //     const txResult = await readContract({
  //       address,
  //       abi,
  //       functionName: 'consultMap' ,
  //       args: [
  //         BigNumber.from(mapAddress),
  //       ]
  //     });

  //     return txResult
  //   } catch (e) {
  //     console.log(e)
  //   }

  //   return
  // }

  async function handleGetRegular() {
    const result = await getRegular() as boolean
    setResultConsultRegular(result)

    setOpenResultA(true)
  }

  async function handleGetConfrontMap() {
    const resulttx = await getconfrontMap().then(result => {
      return result
    })

    setResultConfrontMap(resulttx)

    setOpenResultB(true)

  }

  console.log(resultConsultRegular)
  console.log(resultConfrontMap)

  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function closeModal() {
    setmodalIsOpen(false);
  }


  useEffect(() => {
    if(openResultA || !openResultA){
      setmodalIsOpen(true)
    }
  }, [openResultA ])

  useEffect(() => {
    if(openResultB || !openResultB){
      setmodalIsOpen(true)
    }
  }, [openResultB ])

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

            <button className={styles.group3}
              onClick={handleGetRegular}>
              <span>Consultar</span>
            </button>
          </div>
          <div className={styles.Quad2}>
            <input
              onChange={(e) => setURIMap(e.target.value)}
              type="text"
              id="name"
              name="numberOficio"
              required className={styles.input}
              placeholder="Insira o link referente ao mapa da região"
            />

            <input
              onChange={(e) => setNumeroMatricula(e.target.value)}
              type="text"
              id="name"
              name="numberOficio"
              required className={styles.input}
              placeholder="Numero da Matricula: "
            />

            <button className={styles.group3}
              onClick={handleGetConfrontMap}>
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

      {openResultA && (
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Modal Minting"
              >
              <button
              onClick={() => setmodalIsOpen(!modalIsOpen)}
              className={styles.closeModal}
            >X</button>
              <div className={styles.status}>
                  <h2 className={styles.titleModal}>Resultado</h2>
                  <p className={styles.paragraphModal}>{
                      resultConsultRegular ? 'O imóvel está regularizado' : 'O imóvel não está regularizado'
                  }</p>

              <div className={styles.imageLoadingContainer}>
                <CircleLoader
                  color="#5400d3"
                  loading={true}
                  size={450}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
              </div>
          </Modal>
          )}

      {openResultB && (
          <Modal
          isOpen={modalIsOpen}

          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal Minting"
          >
          <button
          onClick={() => setmodalIsOpen(!modalIsOpen)}
          className={styles.closeModal}
        >X</button>
          <div className={styles.status}>
              <h2 className={styles.titleModal}>Resultado</h2>
              <p className={styles.paragraphModal}>{
                    resultConfrontMap ?  'O imóvel está regularizado' : 'O imóvel não está regularizado'
              }</p>

              <div className={styles.imageLoadingContainer}>
                <CircleLoader
                  color="#5400d3"
                  loading={true}
                  size={450}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
            </div>
          </div>
      </Modal>
      )}

  </div>
  );
};
