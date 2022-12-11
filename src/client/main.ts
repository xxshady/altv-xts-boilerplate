import alt from "alt-client"
import { SOMETHING } from "@shared/main"

alt.log("hello world", SOMETHING)

const player = alt.Player.getByID(-1)
// number | undefined too, see ICustomPlayerStreamSyncedMeta
const playerValue = player?.getStreamSyncedMeta("numberExample")
alt.log("playerValue:", playerValue) // undefined
