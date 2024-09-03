// theme.js
import '@fontsource/aclonica'
import '@fontsource/roboto-flex'
import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },

  fonts : {
    heading: ` 'Aclonica', sans-serif`,
    body: `"Roboto Flex", sans-serif`
  },
  components : {
    Button: {
      baseStyle : {
        fontFamily : `"Roboto flex", sans-serif`,
        fontWeight : "100"
      },
      variants: {
        'black': {
          bg: 'black',
          color: "white",
        },
      },
  },

}});

export default theme;
