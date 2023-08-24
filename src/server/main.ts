import alt from "alt-server"
import { SOMETHING } from "@shared/main"
import { BlipColor } from "altv-enums"
import { rpc } from "altv-xrpc-server"

alt.log("hello world", SOMETHING)

// ############ example of typescript meta usage ############

// see custom-types/altv directory
alt.setMeta("numberExample", 123)

// try to uncomment this line
// alt.setMeta("numberExample", "123")

// number | undefined, see ICustomGlobalMeta
const value = alt.getMeta("numberExample")
alt.log("meta value:", value) // 123

const player = alt.Player.getByID(-1)
// number | undefined too, see ICustomPlayerStreamSyncedMeta
const playerValue = player?.getStreamSyncedMeta("numberExample")
alt.log("playerValue:", playerValue) // undefined

// ############ example of enums usage ############

const blip = new alt.PointBlip(0, 0, 0, true)
blip.color = BlipColor.Red

// ############ example of altv-xrpc usage ############

rpc.onClient("example", (player, a) => {
  return a.toString()
})

// TODO: try to uncomment this line:
// rpc.onClient("example", (player, a) => a)


rpc.onWebView("example", (player, b) => b)
