import { transform } from '@svgr/core';
import fs from 'fs';

const svgrPlugin = (options = {}) => ({
    name: 'svgr-plugin',
    setup(build) {
        build.onLoad({ filter: /\.svg$/ }, async (args) => {
            if (args.suffix === '?component') {
                const svg = await fs.promises.readFile(args.path, 'utf8');
                const contents = await transform(svg, { ...options }, { filePath: args.path });
                return {
                    contents,
                    loader: options.typescript ? 'tsx' : 'jsx',
                };
            } else {
                return null;
            }
        });
    },
});

export default svgrPlugin;
