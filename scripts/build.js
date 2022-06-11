import { build } from 'esbuild';
import execTypeDeclarations from './plugins/exec-type-declarations.js';
import { buildConfig } from './config.js';

build({
    ...buildConfig,
    sourcemap: false,
    plugins: [...buildConfig.plugins, execTypeDeclarations],
    external: ['react-dom'],
}).catch(() => process.exit(1));
