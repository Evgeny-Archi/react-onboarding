import { build, BuildOptions } from 'esbuild';

const config: BuildOptions = {
    entryPoints: ['src/index.tsx'],
    bundle: false,
    outfile: 'build/app.js',
    sourcemap: true,
    watch: {
        onRebuild(err, result) {
            if (err) {
                console.error('Watching build failed: ', err);
            } else {
                console.log('Watch build success: ', result);
            }
        },
    },
};

build(config)
    .then(() => console.log('Watching...'))
    .catch(() => process.exit(1));
