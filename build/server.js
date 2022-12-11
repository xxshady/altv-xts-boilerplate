import esbuild from "esbuild"
import { altvEsbuild } from "altv-esbuild"
import { altvEsbuildOptions, esbuildOptions } from "./shared"

esbuild.build({
  ...esbuildOptions,
  platform: "node",
  entryPoints: ["src/server/main.ts"],
  outfile: "resources/main/server.js",
  plugins: [
    altvEsbuild({
      ...altvEsbuildOptions,
      mode: "server",
    }),
  ]
})
