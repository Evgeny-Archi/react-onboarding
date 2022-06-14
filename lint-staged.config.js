export default {
    '{src,example}/**/*.{ts,tsx}': () => 'yarn type-check',
    '{src,example}/**/*.{js,jsx,ts,tsx}': ['yarn prettify', 'yarn lint', 'yarn stylelint'],
};
