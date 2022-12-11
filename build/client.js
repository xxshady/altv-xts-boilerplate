import esbuild from "esbuild"
import { altvEsbuild } from "altv-esbuild"
import { altvEsbuildOptions, esbuildOptions } from "./shared"

esbuild.build({
  ...esbuildOptions,
  platform: "node",
  entryPoints: ["src/client/main.ts"],
  outfile: "resources/main/client.js",
  plugins: [
    altvEsbuild({
      ...altvEsbuildOptions,
      mode: "client",
    }),
  ]
})
