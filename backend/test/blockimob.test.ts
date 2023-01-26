import { expect } from 'chai';
import { Contract, ContractFactory, providers, Wallet } from 'ethers';
import { abi, bytecode } from '../artifacts/contracts/BlockImob.sol/BlockImob.json';
import {ethers} from 'hardhat'

describe('BlockImob', () => {
    let accounts : any;
    let blockImob: Contract;
    let owner: Wallet;
    let tokenId: number;

    beforeEach(async () => {
        accounts = await ethers.getSigners();
        owner = accounts.getWallets()[0];
        const factory = new ContractFactory(abi, bytecode, owner);
        blockImob = await factory.deploy();
        tokenId = 1;
    });

    it('should mint a new token', async () => {
        await blockImob.mint(owner.address, 'https://example.com', 'district', 123);

        const tokenURI = await blockImob.tokenIdToURI(tokenId);
        expect(tokenURI).to.equal('https://example.com');

        const tokenOwner = await blockImob.ownerOf(tokenId);
        expect(tokenOwner).to.equal(owner.address);
    });

    it('should burn a token', async () => {
        await blockImob.mint(owner.address, 'https://example.com', 'district', 123);
        await blockImob.burn(tokenId);

        const tokenURI = await blockImob.tokenIdToURI(tokenId);
        expect(tokenURI).to.equal('');

        const tokenOwner = await blockImob.ownerOf(tokenId);
        expect(tokenOwner).to.equal('0x0000000000000000000000000000000000000000');
    });

    it('should set operator', async () => {
        const operator = accounts.getWallets()[1];
        await blockImob.setOperator(operator.address, true);

        const isOperator = await blockImob.isApprovedForAll(owner.address, operator.address);
        expect(isOperator).to.be.true;
    });

    it('should update token deal', async () => {
        await blockImob.mint(owner.address, 'https://example.com', 'district', 123);
        await blockImob.updateTokenDeal(tokenId, 1, '0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321');

        const deal = await blockImob.tokenIdToDeal(tokenId);
        expect(deal.dealType).to.equal(1);
        expect(deal.dealAddress).to.equal('0x1234567890123456789012345678901234567890');
        expect(deal.fiiAddress).to.equal('0x0987654321098765432109876543210987654321');
    });
});
