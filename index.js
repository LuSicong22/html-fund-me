import { ethers } from "./ethers-5.6.esm.min.js"
import { abi } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getAnimations("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
    } catch (error) {
      console.log(error)
    }
    connectButton.innerHTML = "Connected!"
    const accounts = await ethereum.request({ method: "eth_accounts" })
    console.log(accounts)
  } else {
    connectButton.innerHTML = "Please install Metamask."
  }
}

async function fund(ethAmount) {
  console.log(`Funding with ${ethAmount}...`)
  if (typeof window.ethereum !== "undefined") {
    // provider / connection to the blockchain
    // signer / wallet / someone with some gas
    // contract that we are interacting with
    // ^ ABI & Address
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = ""
  }
}
