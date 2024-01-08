import { build } from "./shared.js"

build({
  esbuild: {
    entryPoints: ["src/client/main.ts"],
    outfile: "resources/main/client.js",
  },
  altvEsbuild: {
    mode: "client",
  }
})
