import { serve } from 'esbuild';
import chalk from 'chalk';
import { serveConfig, buildConfig } from './config.js';

serve(serveConfig, {
    ...buildConfig,
    entryPoints: ['example/index.tsx'],
    tsconfig: 'tsconfig.json',
    outfile: 'example/app.js',
    define: {
        __DEV__: true,
    },
})
    .then(({ host, port }) => {
        console.log(`Exmaple page started on ${chalk.underline(`${host}:${port}`)}`);
    })
    .catch(() => process.exit(1));
