import alt from "alt-server"
import { SOMETHING } from "@shared/main"

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
