# alt:V TypeScript boilerplate

Boilerplate for users of strict TypeScript on the alt:V platform.<br>

## What is included
- hot reload of the script during development (using esbuild with [altv-esbuild](https://github.com/xxshady/altv-esbuild)).
- parallel typescript checks during development

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
