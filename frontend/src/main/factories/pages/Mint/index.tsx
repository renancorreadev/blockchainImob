import { useEffect, useState } from "react";

import styles from "./Mint.module.css";
import axios from "axios";

export function Mint() {
  const [fileImg, setFileImg] = useState<File | undefined>(undefined);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const sendJSONtoIPFS = async (ImgHash: string) => {
    const data = {
      hashToPin: "QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn",
      pinataOptions: {
        cidVersion: 1,
        wrapWithDirectory: false,
      },
      pinataMetadata: {
        name: "testv4",
        keyvalues: {
          customKey: "test-v4",
        },
      },
      pinataContent: {
        name: name,
        description: desc,
        image: ImgHash,
      },
    };

    try {
      const resJSON = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinByHash",
        data: data,
        headers: {
          pinata_api_key: `${import.meta.env.VITE_PINATA_API_KEY}`,
          pinata_secret_api_key: `${
            import.meta.env.VITE_PINATA_SECRET_API_KEY
          }`,
        },
      });

      console.log("final ", `ipfs://${resJSON.data.IpfsHash}`);
      const tokenURI = `ipfs://${resJSON.data.IpfsHash}`;
      console.log("Token URI", tokenURI);
    } catch (error) {
      console.log("JSON to IPFS: ");
      console.log(error);
    }
  };

  const sendFileToIPFS = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fileImg) {
      try {
        const formData = new FormData();
        formData.append("file", fileImg);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `${import.meta.env.VITE_PINATA_API_KEY}`,
            pinata_secret_api_key: `${
              import.meta.env.VITE_PINATA_SECRET_API_KEY
            }`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        sendJSONtoIPFS(ImgHash);
      } catch (error) {
        console.log("File to IPFS: ");
        console.log(error);
      }
    }
  };

  // const testAuthentication = () => {
  //   const url = "https://api.pinata.cloud/data/testAuthentication";
  //   return axios
  //     .get(url, {
  //       headers: {
  //         pinata_api_key: `${import.meta.env.VITE_PINATA_API_KEY}`,
  //         pinata_secret_api_key: `${
  //           import.meta.env.VITE_PINATA_SECRET_API_KEY
  //         }`,
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const listNFT = () => {
  //   const url = "https://api.pinata.cloud/data/pinList?includesCount=false";

  //   return axios
  //     .get(url, {
  //       headers: {
  //         pinata_api_key: `${import.meta.env.VITE_PINATA_API_KEY}`,
  //         pinata_secret_api_key: `${
  //           import.meta.env.VITE_PINATA_SECRET_API_KEY
  //         }`,
  //       },
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const mintNFT = async (tokenURI) => {
  //   try {
  //     await votingSystemContract.makeAnEpicNFT(tokenURI, winner.address);

  //     const val = await votingSystemContract.getTokenId();
  //     console.log(val);
  //     setTokenID(parseInt(val._hex));

  //     setFileImg("");
  //     setName("");
  //     setDesc("");
  //   } catch (error) {
  //     console.log("Error while minting NFT with contract");
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    console.log(fileImg);
  }, [fileImg]);

  return (
    <>
      {/* <button onClick={listNFT}> Teste Pinata</button> */}
      <form className={styles.formContainer} onSubmit={sendFileToIPFS}>
        <div className={styles.file}>
          <input
            id="file"
            style={{ display: "none" }}
            title="Choose a image please"
            className={styles.file}
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFileImg(e.target.files[0]);
              }
            }}
            required
          />
          <label htmlFor="file">Click to upload image</label>
        </div>

        <input
          className={styles.name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
          value={name}
        />
        <input
          className={styles.description}
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          placeholder="desc"
          required
          value={desc}
        />

        <button className="bttn_ui me-3" type="submit">
          Mint
        </button>
      </form>
    </>
  );
}
