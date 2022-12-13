import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
import 'hardhat-celo'

dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
    },
    alfajores: {
      // can be replaced with the RPC url of your choice.
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [
       "3639b83ba14619a52c7a5c47332a460f88b6fa62bb5e9f2a3b4d754247c4f2d1"
      ],
    },
    celo: {
      url: "https://forno.celo.org",
      accounts: [
        "3639b83ba14619a52c7a5c47332a460f88b6fa62bb5e9f2a3b4d754247c4f2d1"
      ],
    }
  },
  etherscan: {
    apiKey: {
        alfajores: "EWFHPD8U7PQ2WB5HS7J2Y17P2EYB8M8WU1",
        celo: "EWFHPD8U7PQ2WB5HS7J2Y17P2EYB8M8WU1"
    }
  }
};

export default config;
