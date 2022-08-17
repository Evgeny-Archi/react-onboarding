import chalk from 'chalk';
import svgrPlugin from './plugins/svgr.js';

export const buildConfig = {
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'build/app.js',
    format: 'esm',
    minify: true,
    sourcemap: true,
    loader: {
        '.svg': 'dataurl',
        '.png': 'dataurl',
    },
    plugins: [svgrPlugin({ typescript: true })],
};

export const serveConfig = {
    host: '127.0.0.1',
    servedir: 'example',
    onRequest({ status, timeInMS }) {
        if (timeInMS > 0 && status === 200) {
            console.log(
                chalk.green(`Successfully rebuild ${chalk.bold(buildConfig.outfile)} in ${chalk.bold(timeInMS)} ms\n`) +
                    'Waiting for reload page...'
            );
        }
    },
};
