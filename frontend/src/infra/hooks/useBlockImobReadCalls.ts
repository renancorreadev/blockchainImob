/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {readContract} from '@wagmi/core'
import { useAccount} from 'wagmi'
import { useEffect, useState } from 'react';

import {BlockImobContractConfig} from '../../../../backend/config/ContractConfigs/BlockImobContractConfig'
import {abi} from './abis/abi'
const address = BlockImobContractConfig.contractAddress   as string;


type BlockImobReadCalls = 'contractName' | 'userAllowed'

interface FunctionsContractInterface {
  contractName: Promise<void>,
  userAllowed: Promise<void>,
}

export function useBlockImobReadCalls(functionToCalled: BlockImobReadCalls) {
  const [result, setResult] = useState<unknown>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const {address: WalletAddress} = useAccount();


  useEffect(() => {
    const getContractName = async() : Promise<void> => {
      try {
        const txResult = await readContract({
          address,
          abi,
          functionName: 'name' ,
        });

        setResult(txResult);
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false);
      }

    };

    const getUserAllowed = async(addressProvider:  `0x${string}`) : Promise<void> => {
      try {
        const txResult = await readContract({
          address,
          abi,
          functionName: 'allowed' ,
          args: [addressProvider],
        });

        setResult(txResult);
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false);
      }

    };

    const executeReadFunctionContract = {
      contractName: getContractName(),
      userAllowed: getUserAllowed(WalletAddress!),
    } as FunctionsContractInterface;

    executeReadFunctionContract[functionToCalled]
  }, []);

  return { result, error, loading }
}
