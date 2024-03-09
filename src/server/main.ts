import alt from "alt-server"
import { BaseObjectFilterType, BlipColor } from "altv-enums"

alt.on('playerConnect', async (player) => {
    player.spawn('mp_f_freemode_01', new alt.Vector3(0, 0, 70))
})
