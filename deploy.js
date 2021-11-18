const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { bytecode, interface } = require("./compile");

const provider = new HDWalletProvider(
  "drive brand cake teach enough horror reflect flush company festival shift polar", // mnemonic
  "https://rinkeby.infura.io/v3/44e26451bd4343d1b4ecffdad78d067f" // rinkeby url get from infura
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const contractInfo = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", contractInfo.options.address);
};

deploy();
