export default {
    'src/**/*.{ts,tsx}': () => 'yarn type-check',
    'src/**/*.{js,jsx,ts,tsx}': ['yarn prettify', 'yarn lint', 'yarn stylelint'],
};
