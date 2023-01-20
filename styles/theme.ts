export const EnglishFontRegular = "EnglishFontRegular";
export const EnglishFontBold = "EnglishFontBold";

const defaultTheme = {
  colors: {
    primary: {
      default: "rgba(55,184,153,1)",
      red: "rgba(248,111,140,1)",
      yellow: "rgba(253,161,77,1)",
    },
    secondary: {
      background: "#ffffff",
      background2: "#ebf8f5",
      background3: "#f9fafc",
      border: "#ecf0ff",
    },
    text: {
      title: "#2B3D5F",
      body: "#88A1C8",
      error: "#ff3333",
    },
  },

  typography: {
    fontFamily: {
      EnglishTitle: EnglishFontBold,
      EnglishBody: EnglishFontRegular,
    },
  },
} as const;

export default defaultTheme;
