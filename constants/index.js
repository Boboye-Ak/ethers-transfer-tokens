const providerRPC = [
    {
        name: "Binance Smart Chain Mainnet",
        rpc: process.env.BSC_RPC_URL,
        chainId: 56,
    },
    {
        name: "Goerli",
        rpc: process.env.GOERLI_RPC_URL,
        chainId: 5,
    },
]

module.exports = { providerRPC }
