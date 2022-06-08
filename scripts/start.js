import { build } from 'esbuild';

build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'build/app.js',
    sourcemap: true,
    loader: {
        '.svg': 'dataurl',
    },
    watch: {
        onRebuild(err, result) {
            if (err) {
                console.error('Watching build failed: ', err);
            } else {
                console.log('Watch build success: ', result);
            }
        },
    },
})
    .then(() => console.log('Watching...'))
    .catch(() => process.exit(1));
