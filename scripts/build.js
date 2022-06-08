import { build } from 'esbuild';
import { exec } from 'child_process';
import 'colors';

const myPlugin = {
    name: 'my-plugin',
    setup(build) {
        build.onEnd((result) => {
            if (result.errors.length > 0) {
                return;
            } else if (result.warnings.length > 0) {
                return;
            }

            console.log('Successfully build'.green);
            console.log('Generating types declaration...');
            exec('tsc --emitDeclarationOnly --project tsconfig.json', (error) => {
                if (error) {
                    console.error(`Generating error: ${error}`);
                    return;
                }
                console.log('Successfully generate'.green);
            });
        });
    },
};

build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'build/app.js',
    format: 'esm',
    minify: true,
    sourcemap: true,
    loader: {
        '.svg': 'dataurl',
    },
    plugins: [myPlugin],
    external: ['react', 'react-dom'],
}).catch(() => process.exit(1));
