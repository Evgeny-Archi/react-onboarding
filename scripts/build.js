require('esbuild')
    .build({
        entryPoints: ['src/index.tsx'],
        bundle: true,
        outfile: 'build/app.js',
        minify: true,
        sourcemap: true,
        target: ['es6', 'chrome58', 'edge16', 'firefox57', 'ie11', 'opera45', 'safari11'],
    })
    .catch(() => process.exit(1));

// import { build } from 'esbuild';

// const config = {
//     entryPoints: ['src/index.tsx'],
//     bundle: false,
//     outfile: 'build/app.js',
//     minify: true,
//     sourcemap: true,
//     target: ['es6', 'chrome58', 'edge16', 'firefox57', 'ie11', 'opera45', 'safari11'],
// };

// build(config).catch(() => process.exit(1));
