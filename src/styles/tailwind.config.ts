import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
       "./app/**/*.{ts,tsx}",
       "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: "#171512",
                paper: "#F3EFE7",
                deepRed: "#C22A2A",
                burntOrange: "#E4671F",
                steel: "#8A8578",
            },
            fontFamily: {
                display: ["var(--font-anton)", "sans-serif"],
                sans: ["var( --font-oswald)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;