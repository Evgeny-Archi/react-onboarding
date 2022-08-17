import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        text-size-adjust: 100%;
        font-family: Arial, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", -apple-system, sans-serif;
        font-size: 14px;
        line-height: 1.55;
    }

    h1, h2, h3 {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
