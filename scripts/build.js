import { build } from 'esbuild';
import execTypeDeclarations from './plugins/exec-type-declarations.js';
import { buildConfig } from './config.js';

build({
    ...buildConfig,
    sourcemap: false,
    plugins: [...buildConfig.plugins, execTypeDeclarations],
    tsconfig: 'tsconfig.prod.json',
    external: ['react-dom'],
    define: {
        __DEV__: false,
    },
}).catch(() => process.exit(1));
