import alt from "alt-client"
import { SOMETHING } from "@shared/main"
import { BlipColor } from "altv-enums"
import { rpc } from "altv-xrpc-client"

alt.log("hello world", SOMETHING)

const player = alt.Player.getByID(-1)
// number | undefined too, see ICustomPlayerStreamSyncedMeta
const playerValue = player?.getStreamSyncedMeta("numberExample")
alt.log("playerValue:", playerValue) // undefined

// ############ example of enums usage ############

const blip = new alt.PointBlip(0, 10, 0)
blip.color = BlipColor.LemonGreen

// ############ example of altv-xrpc usage ############

const rpcClientToServer = async () => {
  const result = await rpc.emitServer("example", 10)

  alt.log("client->server rpc example result:", result)

  // try to uncomment these lines:
  // rpc.emitServer("example", "this should be a number and not string")
  // rpc.emitServer("what?")
}

rpcClientToServer()
  .catch(e => alt.logError(e))

// ############ example of webview & altv-xrpc usage ############

let url = ""
if (___DEV_MODE___) {
  url = "http://127.0.0.1:5173"
} else {
  url = "http://assets/main-view/dist/index.html"
}

alt.log("creating webview with url:", url)

const webview = new alt.WebView(url)

webview.emit("example", 123)

// now we can send rpc from webview to client & server
rpc.useWebView(webview)
