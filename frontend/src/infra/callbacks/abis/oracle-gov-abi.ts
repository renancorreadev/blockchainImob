export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_idImob",
        type: "uint256",
      },
    ],
    name: "ConsultImobReg",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_registryRural",
        type: "uint256",
      },
    ],
    name: "ConsultMapRural",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_map",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_registryRural",
        type: "uint256",
      },
    ],
    name: "confrontMapEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idImob",
        type: "uint256",
      },
    ],
    name: "ConsultRegular",
    outputs: [
      {
        internalType: "bool",
        name: "regular",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "_registryRural",
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
        name: "regular",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberImobRegular",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberMapRegularRural",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_allow",
        type: "bool",
      },
    ],
    name: "setAllow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_maprural",
        type: "string",
      },
    ],
    name: "setMapRural",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idImob",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_regular",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_imobcontract",
        type: "address",
      },
    ],
    name: "setRegular",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
