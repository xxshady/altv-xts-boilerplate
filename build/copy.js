import fs from "fs"

const copy = (file, dest) => {
  fs.copyFile(file, dest, (err) => {
    if (!err) {
      console.log("copied", file, "->", dest)
      return
    }

    console.error("failed to copy", file, "err:", err)
    process.exit(-1)
  })
}

copy("src/resource.toml", "resources/main/resource.toml")
