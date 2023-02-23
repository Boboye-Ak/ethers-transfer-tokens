const ethers = require("ethers")
const { providerRPC } = require("../constants/index")

module.exports.erc20Transfer = () => {
    console.log("Sending...")
    const rpcConfig = providerRPC.find((element) => {
        if (element.chainId == chainId) {
            return element
        }
    })
    console.log("creating provider")
    const provider = new ethers.JsonRpcProvider(rpcConfig.rpc, {
        chainId: rpcConfig.chainId,
        name: rpcConfig.name,
    })
}
