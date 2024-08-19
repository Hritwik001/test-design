/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f7f9fc",
        "nds-refresh-neutrals-00white": "#fff",
        gray: {
          100: "#7a7f85",
          200: "#19191a",
        },
        "nds-refresh-neutrals-400": "#34434b",
        "nds-refresh-neutrals-500": "#253037",
        steelblue: "#147cb9",
        black: "#1a1a24",
        "secondary-colors-warning-yellow-300": "#ffdc73",
        "primary-accent-orange-900": "#4d2000",
        "secondary-colors-success-green-200": "#b3f3af",
        "secondary-colors-success-green-900": "#04370b",
        "primary-accent-orange-300": "#ffbe8f",
        "nds-refresh-neutrals-50": "#e5eaed",
        "nds-colors-library-primary-main-grey600": "#636569",
        slategray: "#656579",
        "nds-refresh-neutrals-800": "#090b0c",
        orchid: "#a251a2",
        lightgreen: "#7edc74",
        goldenrod: "#f5c543",
        chocolate: "#eb8b2f",
        orangered: "#db3811",
        "main-grey-700": "#484a4c",
        darkgray: "#979797",
        "main-grey-200": "#eaebeb",
        "nds-colors-library-secondary-accent-blue600": "#315bd3",
        "secondary-colors-danger-red-300": "#ff7e61",
        "secondary-colors-danger-red-900": "#4f1200",
        khaki: "#c4cf58",
        "green-600": "#197335",
        "nds-colors-library-secondary-success-green700": "#2f8432",
      },
      spacing: {
        "spacing-space-sm": "4px",
      },
      fontFamily: {
        "nds-typography-library-body-text-small": "Abel",
        "nexus-theme-title-medium": "Inter",
      },
      borderRadius: {
        mini: "15px",
        "spacing-space-sm": "4px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      xs: "12px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
