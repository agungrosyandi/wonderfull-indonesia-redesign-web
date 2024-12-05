import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // responsive mode format

    screens: {
      tabletMinWidth: '640px', // (min-width: 640px)
      laptopMinWidth: '1024px', // (min-width: 1024px)
      desktopMinWidth: '1280px', // (min-width: 1280px)
      fullHdMinWidth: '1440px', // (min-width: 1440px)
    },

    extend: {
      fontFamily: {
        DrukBoldTrial: ['DrukBoldTrial'],
        DrukMediumTrial: ['DrukMediumTrial'],
      },
    },
  },
  plugins: [],
};
export default config;
