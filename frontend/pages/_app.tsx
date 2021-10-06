import '../styles/globals.css'
import {
	ChakraProvider
} from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import styles from './styles/Home.module.scss';
import NavBar from '../components/navbar'

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#C6F5B0",
      secondary: "#BAB0F5",
      tertiary: "#DBB088",
      primaryLight: "#EFFCE8",
      secondaryLight: "#E7E3FC",
      TertiaryLight: "#FCEFE3",
      MessageSuccess: "#94E0AF",
      MessageError: "#E5A3A1",
      MessageWarning: "#FFF0B2",
      PrimaryDark: "#ABB2A8",
      SecondaryDark: "#A8A6B2",
      TertiaryDark: "#B2ACA6",
      black : {
      	100: "#FCFAFA",
      	200: "#F6F7F5",
      	300: "#E9EBE9",
      	400: "#D3D6D2",
      	500: "#B8BAB6",
      	600: "#888A87",
      	700: "#70736F",
      	800: "#323331",
      	900: "#1D1F1C",
      },
    },
  },
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
