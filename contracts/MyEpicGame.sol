// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./libraries/Base64.sol";

contract MyEpicGame is ERC721 {
    struct CharacterAttributes {
        uint256 characterIndex;
        string name;
        string description;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 attackDamage;
    }
    struct BigBoss {
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 attackDamage;
    }
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    CharacterAttributes[] public defaultCharacters;
    BigBoss public bigBoss;
    mapping(uint256 => CharacterAttributes) public nftHolderAttributes;
    mapping(address => uint256) public nftHolders;
    event CharacterNFTMinted(
        address sender,
        uint256 tokenId,
        uint256 characterIndex
    );
    event AttackComplete(
        address sender,
        uint256 newBossHp,
        uint256 newPlayerHp
    );

    constructor(
        string[] memory characterNames,
        string[] memory characterImageURIs,
        string[] memory characterDescription,
        uint256[] memory characterHp,
        uint256[] memory characterAttackDmg,
        string memory bossName,
        string memory bossImageURI,
        uint256 bossHp,
        uint256 bossAttackDamage
    ) ERC721("Ricy", "RICY") {
        for (uint256 i = 0; i < characterNames.length; i += 1) {
            defaultCharacters.push(
                CharacterAttributes({
                    characterIndex: i,
                    name: characterNames[i],
                    description: characterDescription[i],
                    imageURI: characterImageURIs[i],
                    hp: characterHp[i],
                    maxHp: characterHp[i],
                    attackDamage: characterAttackDmg[i]
                })
            );
            CharacterAttributes memory c = defaultCharacters[i];
            console.log(
                "Done initializing %s w/ HP %s, img %s",
                c.name,
                c.hp,
                c.imageURI
            );
        }
        bigBoss = BigBoss({
            name: bossName,
            imageURI: bossImageURI,
            hp: bossHp,
            maxHp: bossHp,
            attackDamage: bossAttackDamage
        });
    }

    function mintCharacterNFT(uint256 _characterIndex) external {
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        nftHolderAttributes[newItemId] = CharacterAttributes({
            characterIndex: _characterIndex,
            name: defaultCharacters[_characterIndex].name,
            description: defaultCharacters[_characterIndex].description,
            imageURI: defaultCharacters[_characterIndex].imageURI,
            hp: defaultCharacters[_characterIndex].hp,
            maxHp: defaultCharacters[_characterIndex].maxHp,
            attackDamage: defaultCharacters[_characterIndex].attackDamage
        });
        console.log(
            "Minted NFT w/ tokenId %s and characterIndex %s",
            newItemId,
            _characterIndex
        );
        nftHolders[msg.sender] = newItemId;
        _tokenIds.increment();
        emit CharacterNFTMinted(msg.sender, newItemId, _characterIndex);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        CharacterAttributes memory charAttributes = nftHolderAttributes[
            _tokenId
        ];
        string memory strHp = Strings.toString(charAttributes.hp);
        string memory strMaxHp = Strings.toString(charAttributes.maxHp);
        string memory strAttackDamage = Strings.toString(
            charAttributes.attackDamage
        );
        string memory json = Base64.encode(
            abi.encodePacked(
                "{'name': '",
                charAttributes.name,
                " -- NFT #: ",
                Strings.toString(_tokenId),
                "', 'description': '",
                charAttributes.description,
                "', 'image': '",
                charAttributes.imageURI,
                "', 'attributes': [ { 'trait_type': 'Health Points', 'value': ",
                strHp,
                ", 'max_value':",
                strMaxHp,
                "}, { 'trait_type': 'Attack Damage', 'value': ",
                strAttackDamage,
                "} ]}"
            )
        );
        string memory output = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        return output;
    }

    function attackBoss() public {
        uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
        CharacterAttributes storage player = nftHolderAttributes[
            nftTokenIdOfPlayer
        ];
        require(player.hp > 0, "character's dead");
        require(bigBoss.hp > 0, "boss's dead.");
        if (bigBoss.hp < player.attackDamage) {
            bigBoss.hp = 0;
        } else {
            bigBoss.hp = bigBoss.hp - player.attackDamage;
        }
        if (player.hp < bigBoss.attackDamage) {
            player.hp = 0;
        } else {
            player.hp = player.hp - bigBoss.attackDamage;
        }
        console.log("Player attacked boss. New boss hp: %s", bigBoss.hp);
        console.log("Boss attacked player. New player hp: %s\n", player.hp);
        emit AttackComplete(msg.sender, bigBoss.hp, player.hp);
    }

    function checkIfUserHasNFT()
        public
        view
        returns (CharacterAttributes memory)
    {
        uint256 userNftTokenId = nftHolders[msg.sender];
        if (userNftTokenId >= 0) {
            return nftHolderAttributes[userNftTokenId];
        } else {
            CharacterAttributes memory emptyStruct;
            return emptyStruct;
        }
    }

    function getAllDefaultCharacters()
        public
        view
        returns (CharacterAttributes[] memory)
    {
        return defaultCharacters;
    }
}
