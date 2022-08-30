/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace MyEpicGame {
  export type CharacterAttributesStruct = {
    characterIndex: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    imageURI: PromiseOrValue<string>;
    hp: PromiseOrValue<BigNumberish>;
    maxHp: PromiseOrValue<BigNumberish>;
    attackDamage: PromiseOrValue<BigNumberish>;
  };

  export type CharacterAttributesStructOutput = [
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    characterIndex: BigNumber;
    name: string;
    description: string;
    imageURI: string;
    hp: BigNumber;
    maxHp: BigNumber;
    attackDamage: BigNumber;
  };
}

export interface MyEpicGameInterface extends utils.Interface {
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "attackBoss()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "bigBoss()": FunctionFragment;
    "checkIfUserHasNFT()": FunctionFragment;
    "defaultCharacters(uint256)": FunctionFragment;
    "getAllDefaultCharacters()": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "mintCharacterNFT(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nftHolderAttributes(uint256)": FunctionFragment;
    "nftHolders(address)": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approve"
      | "attackBoss"
      | "balanceOf"
      | "bigBoss"
      | "checkIfUserHasNFT"
      | "defaultCharacters"
      | "getAllDefaultCharacters"
      | "getApproved"
      | "isApprovedForAll"
      | "mintCharacterNFT"
      | "name"
      | "nftHolderAttributes"
      | "nftHolders"
      | "ownerOf"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "supportsInterface"
      | "symbol"
      | "tokenURI"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "attackBoss",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "bigBoss", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkIfUserHasNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultCharacters",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllDefaultCharacters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintCharacterNFT",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nftHolderAttributes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nftHolders",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attackBoss", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bigBoss", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkIfUserHasNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultCharacters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllDefaultCharacters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintCharacterNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nftHolderAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nftHolders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "AttackComplete(address,uint256,uint256)": EventFragment;
    "CharacterNFTMinted(address,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AttackComplete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CharacterNFTMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface AttackCompleteEventObject {
  sender: string;
  newBossHp: BigNumber;
  newPlayerHp: BigNumber;
}
export type AttackCompleteEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  AttackCompleteEventObject
>;

export type AttackCompleteEventFilter = TypedEventFilter<AttackCompleteEvent>;

export interface CharacterNFTMintedEventObject {
  sender: string;
  tokenId: BigNumber;
  characterIndex: BigNumber;
}
export type CharacterNFTMintedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  CharacterNFTMintedEventObject
>;

export type CharacterNFTMintedEventFilter =
  TypedEventFilter<CharacterNFTMintedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface MyEpicGame extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MyEpicGameInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    attackBoss(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    bigBoss(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        name: string;
        imageURI: string;
        hp: BigNumber;
        maxHp: BigNumber;
        attackDamage: BigNumber;
      }
    >;

    checkIfUserHasNFT(
      overrides?: CallOverrides
    ): Promise<[MyEpicGame.CharacterAttributesStructOutput]>;

    defaultCharacters(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        characterIndex: BigNumber;
        name: string;
        description: string;
        imageURI: string;
        hp: BigNumber;
        maxHp: BigNumber;
        attackDamage: BigNumber;
      }
    >;

    getAllDefaultCharacters(
      overrides?: CallOverrides
    ): Promise<[MyEpicGame.CharacterAttributesStructOutput[]]>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mintCharacterNFT(
      _characterIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nftHolderAttributes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        characterIndex: BigNumber;
        name: string;
        description: string;
        imageURI: string;
        hp: BigNumber;
        maxHp: BigNumber;
        attackDamage: BigNumber;
      }
    >;

    nftHolders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  attackBoss(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bigBoss(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber] & {
      name: string;
      imageURI: string;
      hp: BigNumber;
      maxHp: BigNumber;
      attackDamage: BigNumber;
    }
  >;

  checkIfUserHasNFT(
    overrides?: CallOverrides
  ): Promise<MyEpicGame.CharacterAttributesStructOutput>;

  defaultCharacters(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
      characterIndex: BigNumber;
      name: string;
      description: string;
      imageURI: string;
      hp: BigNumber;
      maxHp: BigNumber;
      attackDamage: BigNumber;
    }
  >;

  getAllDefaultCharacters(
    overrides?: CallOverrides
  ): Promise<MyEpicGame.CharacterAttributesStructOutput[]>;

  getApproved(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: PromiseOrValue<string>,
    operator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintCharacterNFT(
    _characterIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  nftHolderAttributes(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
      characterIndex: BigNumber;
      name: string;
      description: string;
      imageURI: string;
      hp: BigNumber;
      maxHp: BigNumber;
      attackDamage: BigNumber;
    }
  >;

  nftHolders(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerOf(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "safeTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: PromiseOrValue<string>,
    approved: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    attackBoss(overrides?: CallOverrides): Promise<void>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bigBoss(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber] & {
        name: string;
        imageURI: string;
        hp: BigNumber;
        maxHp: BigNumber;
        attackDamage: BigNumber;
      }
    >;

    checkIfUserHasNFT(
      overrides?: CallOverrides
    ): Promise<MyEpicGame.CharacterAttributesStructOutput>;

    defaultCharacters(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        characterIndex: BigNumber;
        name: string;
        description: string;
        imageURI: string;
        hp: BigNumber;
        maxHp: BigNumber;
        attackDamage: BigNumber;
      }
    >;

    getAllDefaultCharacters(
      overrides?: CallOverrides
    ): Promise<MyEpicGame.CharacterAttributesStructOutput[]>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintCharacterNFT(
      _characterIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    nftHolderAttributes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        characterIndex: BigNumber;
        name: string;
        description: string;
        imageURI: string;
        hp: BigNumber;
        maxHp: BigNumber;
        attackDamage: BigNumber;
      }
    >;

    nftHolders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "AttackComplete(address,uint256,uint256)"(
      sender?: null,
      newBossHp?: null,
      newPlayerHp?: null
    ): AttackCompleteEventFilter;
    AttackComplete(
      sender?: null,
      newBossHp?: null,
      newPlayerHp?: null
    ): AttackCompleteEventFilter;

    "CharacterNFTMinted(address,uint256,uint256)"(
      sender?: null,
      tokenId?: null,
      characterIndex?: null
    ): CharacterNFTMintedEventFilter;
    CharacterNFTMinted(
      sender?: null,
      tokenId?: null,
      characterIndex?: null
    ): CharacterNFTMintedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    attackBoss(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bigBoss(overrides?: CallOverrides): Promise<BigNumber>;

    checkIfUserHasNFT(overrides?: CallOverrides): Promise<BigNumber>;

    defaultCharacters(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllDefaultCharacters(overrides?: CallOverrides): Promise<BigNumber>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintCharacterNFT(
      _characterIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nftHolderAttributes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nftHolders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    attackBoss(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bigBoss(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkIfUserHasNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    defaultCharacters(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllDefaultCharacters(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: PromiseOrValue<string>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintCharacterNFT(
      _characterIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftHolderAttributes(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nftHolders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: PromiseOrValue<string>,
      approved: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
