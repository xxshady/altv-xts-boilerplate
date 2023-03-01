import { build } from "./shared"

build({
  esbuild: {
    entryPoints: ["src/client/main.ts"],
    outfile: "resources/main/client.js",
  },
  altvEsbuild: {
    mode: "client",
  }
})
