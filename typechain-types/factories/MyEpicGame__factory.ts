/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MyEpicGame, MyEpicGameInterface } from "../MyEpicGame";

const _abi = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "characterNames",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "characterImageURIs",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "characterHp",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "characterAttackDmg",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e3338038062000e338339818101604052810190620000379190620007ca565b60005b8451811015620004525760006040518060c0016040528083815260200187848151811062000091577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518152602001868481518110620000d8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015181526020018584815181106200011f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200185848151811062000166577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518152602001848481518110620001ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015181525090806001815401808255809150506001900390600052602060002090600602016000909190919091506000820151816000015560208201518160010190805190602001906200020992919062000532565b5060408201518160020190805190602001906200022892919062000532565b50606082015181600301556080820151816004015560a082015181600501555050600080828154811062000285577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600602016040518060c001604052908160008201548152602001600182018054620002ba9062000ac4565b80601f0160208091040260200160405190810160405280929190818152602001828054620002e89062000ac4565b8015620003395780601f106200030d5761010080835404028352916020019162000339565b820191906000526020600020905b8154815290600101906020018083116200031b57829003601f168201915b50505050508152602001600282018054620003549062000ac4565b80601f0160208091040260200160405190810160405280929190818152602001828054620003829062000ac4565b8015620003d35780601f10620003a757610100808354040283529160200191620003d3565b820191906000526020600020905b815481529060010190602001808311620003b557829003601f168201915b50505050508152602001600382015481526020016004820154815260200160058201548152505090506200043a60405180606001604052806025815260200162000e0e602591398260200151836060015184604001516200045d60201b620000091760201c565b506001816200044a919062000a27565b90506200003a565b505050505062000be8565b62000503848484846040516024016200047a9493929190620008ec565b6040516020818303038152906040527f8d142cdd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200050960201b60201c565b50505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b828054620005409062000ac4565b90600052602060002090601f016020900481019282620005645760008555620005b0565b82601f106200057f57805160ff1916838001178555620005b0565b82800160010185558215620005b0579182015b82811115620005af57825182559160200191906001019062000592565b5b509050620005bf9190620005c3565b5090565b5b80821115620005de576000816000905550600101620005c4565b5090565b6000620005f9620005f38462000977565b6200094e565b905080838252602082019050828560208602820111156200061957600080fd5b60005b858110156200066857815167ffffffffffffffff8111156200063d57600080fd5b8086016200064c898262000786565b855260208501945060208401935050506001810190506200061c565b5050509392505050565b6000620006896200068384620009a6565b6200094e565b90508083825260208201905082856020860282011115620006a957600080fd5b60005b85811015620006dd5781620006c28882620007b3565b845260208401935060208301925050600181019050620006ac565b5050509392505050565b6000620006fe620006f884620009d5565b6200094e565b9050828152602081018484840111156200071757600080fd5b6200072484828562000a8e565b509392505050565b600082601f8301126200073e57600080fd5b815162000750848260208601620005e2565b91505092915050565b600082601f8301126200076b57600080fd5b81516200077d84826020860162000672565b91505092915050565b600082601f8301126200079857600080fd5b8151620007aa848260208601620006e7565b91505092915050565b600081519050620007c48162000bce565b92915050565b60008060008060808587031215620007e157600080fd5b600085015167ffffffffffffffff811115620007fc57600080fd5b6200080a878288016200072c565b945050602085015167ffffffffffffffff8111156200082857600080fd5b62000836878288016200072c565b935050604085015167ffffffffffffffff8111156200085457600080fd5b620008628782880162000759565b925050606085015167ffffffffffffffff8111156200088057600080fd5b6200088e8782880162000759565b91505092959194509250565b6000620008a78262000a0b565b620008b3818562000a16565b9350620008c581856020860162000a8e565b620008d08162000bbd565b840191505092915050565b620008e68162000a84565b82525050565b600060808201905081810360008301526200090881876200089a565b905081810360208301526200091e81866200089a565b90506200092f6040830185620008db565b81810360608301526200094381846200089a565b905095945050505050565b60006200095a6200096d565b905062000968828262000afa565b919050565b6000604051905090565b600067ffffffffffffffff82111562000995576200099462000b8e565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620009c457620009c362000b8e565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620009f357620009f262000b8e565b5b620009fe8262000bbd565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600062000a348262000a84565b915062000a418362000a84565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000a795762000a7862000b30565b5b828201905092915050565b6000819050919050565b60005b8381101562000aae57808201518184015260208101905062000a91565b8381111562000abe576000848401525b50505050565b6000600282049050600182168062000add57607f821691505b6020821081141562000af45762000af362000b5f565b5b50919050565b62000b058262000bbd565b810181811067ffffffffffffffff8211171562000b275762000b2662000b8e565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b62000bd98162000a84565b811462000be557600080fd5b50565b6102168062000bf86000396000f3fe6080604052600080fd5b6100a584848484604051602401610023949392919061011c565b6040516020818303038152906040527f8d142cdd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100ab565b50505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006100df82610176565b6100e98185610181565b93506100f981856020860161019c565b610102816101cf565b840191505092915050565b61011681610192565b82525050565b6000608082019050818103600083015261013681876100d4565b9050818103602083015261014a81866100d4565b9050610159604083018561010d565b818103606083015261016b81846100d4565b905095945050505050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b60005b838110156101ba57808201518184015260208101905061019f565b838111156101c9576000848401525b50505050565b6000601f19601f830116905091905056fea2646970667358221220e3a38eee86d51a3f5f5e44b0ee12370decf8b22bfeb8a3dc1a312320777133a864736f6c63430008040033446f6e6520696e697469616c697a696e6720257320772f2048502025732c20696d67202573";

type MyEpicGameConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyEpicGameConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyEpicGame__factory extends ContractFactory {
  constructor(...args: MyEpicGameConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    characterNames: PromiseOrValue<string>[],
    characterImageURIs: PromiseOrValue<string>[],
    characterHp: PromiseOrValue<BigNumberish>[],
    characterAttackDmg: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyEpicGame> {
    return super.deploy(
      characterNames,
      characterImageURIs,
      characterHp,
      characterAttackDmg,
      overrides || {}
    ) as Promise<MyEpicGame>;
  }
  override getDeployTransaction(
    characterNames: PromiseOrValue<string>[],
    characterImageURIs: PromiseOrValue<string>[],
    characterHp: PromiseOrValue<BigNumberish>[],
    characterAttackDmg: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      characterNames,
      characterImageURIs,
      characterHp,
      characterAttackDmg,
      overrides || {}
    );
  }
  override attach(address: string): MyEpicGame {
    return super.attach(address) as MyEpicGame;
  }
  override connect(signer: Signer): MyEpicGame__factory {
    return super.connect(signer) as MyEpicGame__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyEpicGameInterface {
    return new utils.Interface(_abi) as MyEpicGameInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyEpicGame {
    return new Contract(address, _abi, signerOrProvider) as MyEpicGame;
  }
}
