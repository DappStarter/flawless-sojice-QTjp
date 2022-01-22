require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind hospital heavy enrich sun genius'; 
let testAccounts = [
"0x44d299ad0618d5282e00c7d9961826170ab9dc929d7a64ab2e8c03d108c9d623",
"0x1ae4ab8a6c60c22151a60609f43eedcc7c26a4bd5b5d46523254f313acba3ef3",
"0x4da1e260f9b029abd2d9bb6308ca38060457eed3d2b1242da200b81a346d7acc",
"0x5f4a823e6614429a68bb05fd40f0a8be8de5c236275fa8f200a16b0c6f4709fa",
"0x43cb802c070431ec6dbd5c8a4a984d0400db9b55baf71fd234257d5469eb66c3",
"0xe0def329c780f44f559e9db2a7cf3f58a1cb18b1bdb4a009f4177a2bac76d2ca",
"0x47f65d886eb3009577ce3573252fe7ec874d193be702a1226fe40b2017ac5053",
"0xbf4341022e1a061ac429a038c89ccfc7534d81e3650e4c39b493f26ffa6719d7",
"0x3f2518b96ad8b6c78d1908e2c1a9d7e6a7f6bdba1019cc8e9be076306ffc665d",
"0x8c4e991b0f92f04360f268dee1dac27a4f04e503f0e3b93bd3bc2c8f13e73082"
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

