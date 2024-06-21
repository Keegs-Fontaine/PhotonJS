import Photon from "../src/index"

const server = new Photon()

server.get("fuck", () => {
    console.log("aight")
})
