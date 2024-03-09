import alt from "alt-client"

const pos = new alt.Vector3(0, 3, 72)
let object: alt.LocalObject
let webView: alt.WebView
let audio: alt.Audio
let audioOutput: alt.AudioOutputWorld

new alt.Utils.ConsoleCommand('bug', () => {
    const modelHash = alt.hash('prop_tv_flat_01_screen')
    object = new alt.LocalObject(modelHash, pos, alt.Vector3.zero)

    object.waitForSpawn().then(() => {
        alt.log('object spawned')
        webView = new alt.WebView('https://youtu.be/gE6QH3pvklw', modelHash, 'script_rt_tvscreen')
        audioOutput = new alt.AudioOutputWorld(pos)
        webView.addOutput(audioOutput)
    })
})

new alt.Utils.ConsoleCommand('nobug', () => {
    object?.destroy()
    webView?.destroy()    
    audio?.destroy()
    audioOutput?.destroy()

    audio = new alt.Audio('@audio/YUZC+MP4oEN4d7Mrtg.mp3', 1.0)
    audioOutput = new alt.AudioOutputWorld(pos)
    audio.addOutput(audioOutput)
    audio.play()
})
