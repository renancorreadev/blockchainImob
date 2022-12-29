export const abi = [
  {
    inputs: [
      {
        internalType: "contract IGovDataReference",
        name: "_govData",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_map",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_registryRual",
        type: "uint256",
      },
    ],
    name: "confrontMap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_registryRural",
        type: "uint256",
      },
    ],
    name: "consultMap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idImob",
        type: "uint256",
      },
    ],
    name: "consultRegular",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "govData",
    outputs: [
      {
        internalType: "contract IGovDataReference",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
