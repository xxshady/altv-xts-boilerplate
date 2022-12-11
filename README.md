# alt:V TypeScript boilerplate

Boilerplate for users of strict TypeScript on the alt:V platform.<br>
Includes preinstalled eslint, hot reload of the script during development (using esbuild with [altv-esbuild](https://github.com/xxshady/altv-esbuild)).

## How to use:

### Development
1. `yarn setup-project`
2. `yarn dev`
3. Run `server-dev.bat` in a separate terminal

### Production
1. `yarn setup-project`
2. `yarn build`
3. Create server config in root: `server-prod.toml`
4. `server-prod.bat`
