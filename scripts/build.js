import esbuild from 'esbuild';

esbuild
    .build({
        entryPoints: ['src/index.tsx'],
        bundle: true,
        outfile: 'build/app.js',
        format: 'esm',
        minify: true,
        sourcemap: true,
        loader: {
            '.svg': 'dataurl',
        },
    })
    .catch(() => process.exit(1));
