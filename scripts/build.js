import { build } from 'esbuild';
import { exec } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';

const spinner = ora();

const execTypeDeclarations = {
    name: 'exec-type-declarations',
    setup(build) {
        build.onStart(() => {
            spinner.prefixText = 'Building';
            spinner.start();
        });
        build.onEnd((result) => {
            if (result.errors.length > 0) {
                return;
            }

            spinner.succeed();
            spinner.prefixText = 'Generating types';
            spinner.start();

            exec('tsc --emitDeclarationOnly --project tsconfig.json', (error) => {
                if (error) {
                    console.error(`Generating error: ${error}`);
                    return;
                }
                spinner.succeed();
                console.log(chalk.green('Successfully build'));
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
    plugins: [execTypeDeclarations],
    external: ['react', 'react-dom'],
}).catch(() => process.exit(1));
