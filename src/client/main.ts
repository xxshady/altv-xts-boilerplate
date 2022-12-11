import alt from "alt-client"
import { SOMETHING } from "@shared/main"
import { BlipColor } from "altv-enums"

alt.log("hello world", SOMETHING)

const player = alt.Player.getByID(-1)
// number | undefined too, see ICustomPlayerStreamSyncedMeta
const playerValue = player?.getStreamSyncedMeta("numberExample")
alt.log("playerValue:", playerValue) // undefined

// ############ example of enums usage ############

const blip = new alt.PointBlip(0, 10, 0)
blip.color = BlipColor.LemonGreen
