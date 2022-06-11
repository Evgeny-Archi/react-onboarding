import { serve } from 'esbuild';
import chalk from 'chalk';
import { serveConfig, buildConfig } from './config.js';

serve(serveConfig, {
    ...buildConfig,
    entryPoints: ['example/index.tsx'],
    outfile: 'example/app.js',
})
    .then(({ host, port }) => {
        console.log(`Exmaple page started on ${chalk.underline(`${host}:${port}`)}`);
    })
    .catch(() => process.exit(1));
