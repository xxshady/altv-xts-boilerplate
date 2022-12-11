const dev = process.argv[2] === "-dev"
console.log("dev:", dev)

export const esbuildOptions = {
  bundle: true,
  format: "esm",
  target: "esnext",
  logLevel: "info",
  watch: dev,
  sourcemap: dev ? "both" : false,
  minify: !dev,
  keepNames: dev,
}

export const altvEsbuildOptions = {
  dev: (dev
    ? {
      enhancedRestartCommand: true,
    }
    : false
  ),
  altvEnums: true,
}
