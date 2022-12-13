
import {assert } from 'chai'
import {ethers} from 'hardhat'

// const CREAL = "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787" //ETHEREUM FORK
// const CREAL_WHALE = "0x1D918355014CFfF2DA56392AF32771618a291dE8"


describe ("SPU Hackathon tests", () => {
    let blockimob : any;
    let payments: any;
    let oracle;
    let consult;

    let accounts : any;
    let NFTimob : any;

    before(async() =>{
        accounts = await ethers.getSigners();

        const Blockimob = await ethers.getContractFactory("BlockImob")
        blockimob = await Blockimob.connect(accounts[0]).deploy("SPU Hackathon","SPU")
        await blockimob.deployed()

        const Oracle = await ethers.getContractFactory("OracleGov")
        oracle = await Oracle.deploy()
        await oracle.deployed()

        await blockimob.connect(accounts[0]).changeAllow(oracle.address,true);

        const Consult = await ethers.getContractFactory("ConsultImob")
        consult = await Consult.deploy(oracle.address)
        await consult.deployed()

        await blockimob.connect(accounts[0]).changeAllow(consult.address,true);

        const Payments = await ethers.getContractFactory("PaymentsManagement")
        payments = await Payments.deploy(blockimob.address,consult.address)
        await payments.deployed()

        await blockimob.connect(accounts[0]).changeAllow(payments.address,true);

        NFTimob = await ethers.getContractAt("ERC721",blockimob.address)
        // cReal = await ethers.getContractAt("IERC20", CREAL)
        // await network.provider.request({
        //     method: "hardhat_impersonateAccount",
        //     params: [CREAL_WHALE],
        // })
        // const CrealWhale = await ethers.getSigner(CREAL_WHALE)
        // const crealAmount = 1000n * 10n ** 18n
        // expect(await cReal.balanceOf(CrealWhale.address)).to.gte(crealAmount)
        // await cReal.connect(CrealWhale).transfer(accounts[0].address, crealAmount)
    })

    it("BLOCKCIMOB", async() => {
        await blockimob.connect(accounts[0]).mint(accounts[0].address,"uri test","Vila Velha",0o1);

        //@ts-ignore
        assert(NFTimob.balanceOf(accounts[0]),1);

        console.log("Mintado posição: 1")
        console.log("URI: ", await blockimob.tokenURI(1))
        console.log("URI from query {Vila Velha,0001}: ", await blockimob.uriFromQuery("Vila Velha",0o1))
        console.log("Query from TokenId {1}: ", await blockimob.queryFromTokenId(1))
    })

    it("PAYMENTS", async() =>{
        await payments.sellToken(1,accounts[0].address,accounts[1].address,accounts[2].address,accounts[3].address,200)
    })






})