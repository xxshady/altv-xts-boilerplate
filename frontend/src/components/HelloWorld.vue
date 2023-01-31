<script setup lang="ts">
import { ref } from "vue"
import { rpc } from "altv-xrpc-webview"

defineProps<{ msg: string }>()

const count = ref(0)

// ############ example of altv-xrpc usage ############

const rpcWebViewToServer = async () => {
  const result = await rpc.emitServer("example", "test")
  console.log("webview->server rpc example result:", result)

  // try to uncomment these lines:
  // rpc.emitServer("example", 10) // this should be a string and not number
  // rpc.emitServer("what?", 1)
}

rpcWebViewToServer().catch(e => console.error(e))

// ############ example of altv events usage ############

alt.on("example", (payload) => {
  console.log('example client->server event payload:', payload)
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
