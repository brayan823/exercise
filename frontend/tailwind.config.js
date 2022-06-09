/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      limelight: ["Limelight"],
    },
    letterSpacing: {
      test: "0.01em",
    },
    fontSize: {
      custom: [
        "18px",
        {
          lineHeight: "22px",
        },
      ],
      type: "13px",
      title: [
        "36px",
        {
          lineHeight: "44px",
        },
      ],
      footer: [
        "12px",
        {
          lineHeight: "15px",
        },
      ],
      banner: [
        "24px",
        {
          lineHeight: "29px",
        },
      ],
      bannerMobile: [
        "52px",
        {
          lineHeight: "39px",
        },
      ],
      description: [
        "18px",
        {
          lineHeight: "22px",
        },
      ],
    },
    extend: {
      colors: {
        primary: "#fbfaf8",
        white: "#ffffff",
        secondary: "#8e9882",
        border: "#c69f66",
        borderCard: "#E7E3D9",
        borderDescription: "#F1E7CD",
        bgType: "#CD4C15",
        bgAlternativeType: "#758266",
        banner: "#fbfaf8",
      },
      borderRadius: {
        input: "0.625rem",
      },
      textColor: {
        black: "black",
        primary: "#fbfaf8",
        white: "#ffffff",
        title: "#32332E",
        custom: "#615F5B",
        footer: "#8A8370",
        description: "#32332E",
        menuEntry: "#ffffff",
      },
      width: {
        // card: "264px",
        img: "248px",
        logo: "222px",
      },
      height: {
        card: "349px",
        img: "248px",
        menuMobile: "123px",
        logo: "39px",
      },
      minWidth: {
        img: "248px",
      },
      maxWidth: {
        card: "264px",
        cardMobile: "327px",
        img: "248px",
      },
      maxHeight: {
        card: "349px",
      },
      margin: {
        menuLink: "58px",
        logo: "156px",
        logoMobile: "0",
      },
      borderWidth: {
        10: "10px",
      },
      gridTemplateColumns: {
        sm: "repeat(1, minmax(264px, 100%))",
        md: "repeat(2, minmax(264px, 264px))",
        lg: "repeat(4, minmax(264px, 264px))",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
