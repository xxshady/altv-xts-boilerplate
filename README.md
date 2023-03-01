# alt:V TypeScript boilerplate

Special thanks ❤️ to [innxz](https://github.com/innxz) for financially supporting me and this boilerplate

Extended boilerplate for users of strict TypeScript on the alt:V platform<br>

## What is included
- Hot reload of the script during development (using esbuild with [altv-esbuild](https://github.com/xxshady/altv-esbuild))
- Parallel typescript checks during development
- [altv-xrpc](https://github.com/xxshady/altv-xrpc) for request-response events
- [Vue3](https://vuejs.org/guide/introduction.html) framework for UI

## Project structure
- [src/client](/src/client) client-side of TypeScript gamemode
- [src/server](/src/server) server-side of TypeScript gamemode
- [src/shared](/src/shared) shared of TypeScript gamemode
- [build](/build) source code build scripts
- [frontend](/frontend) Vite + Vue3 setup
- [HelloWorld.vue](/frontend/src/components/HelloWorld.vue) frontend alt:V examples
- [custom-types](/custom-types) global TypeScript types for some stuff
- [custom-types/altv-xrpc/xrpc](/custom-types/altv-xrpc/xrpc) event interfaces of [altv-xrpc](https://github.com/xxshady/altv-xrpc)
## How to use

### Development
1. `yarn setup-project` (installing npm deps, altv serverfiles)
2. `yarn dev` (esbuild for building code & tsc for checking types)
3. Run `server-dev.bat` in a separate terminal

### Production
1. `yarn setup-project`
2. `yarn build`
3. Create server config in root: `server-prod.toml`
4. `server-prod.bat`
