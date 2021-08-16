require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note remember clump install help flip gasp'; 
let testAccounts = [
"0x9062d5e65297819e44ce2102f56f63d5e566a34928f889fb0b9b6035b8828e14",
"0x6de1da4cc970c62f9f9d1f1f0433fe205b0c7ac7081015afc5070e25efdaf8db",
"0x55ce33872e5ebd130204860bdffa6cf173fa5503188b6b95f5c2d5bb48646f0e",
"0x05d047b3ccff1906dc44270c2cdd0a1b40f8ead35a9b4693a8ca7d607a15afad",
"0xc47c5afac42fac0551d10654d995d39cdc53ad0ee630cb92bbfa695f3fd735e2",
"0x1874c52b891db3b10597df36912731f3f93754c32853a7b64069e875e4315696",
"0xe844d1319f94f421ff7121530c79fafa07ad8547d62521985537bcd6df6907b9",
"0xfc40dcfdcf3620eb765229b0551e0d24cb19d23e6375c008bd3257f2668a00a2",
"0x5d2ad0c35629d03cea57f6f52ebc08813303d47ce4eb6c7d2652f30cc31860d6",
"0xa0281fdf2cdf87b85e83367f98f9a2c6abd9713e3be5945f0807b33f88317453"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

