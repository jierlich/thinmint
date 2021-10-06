import { useRouter } from 'next/router'
import {
  ChakraProvider,
  useStyleConfig,
  Text,
  Box,
} from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import styles from './styles/Home.module.scss';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  Link as RouteLink
} from 'react-router-dom'
import routes from './config/routes';
import Link from 'next/link'


function NavBar(props: Props) {

const router = useRouter()
const activePage = router.pathname
console.log(activePage);
const isActive = true

  return(
  	<Breadcrumb
        separator=""
        padding="1em 3em"
        borderBottom=".5px solid"
        borderBottomColor="brand.black.400"
        >
      <BreadcrumbItem color={activePage == '/buyer' ? 'brand.secondary' : 'black'}>
        <Link href="/buyer"> Buyer </Link>
      </BreadcrumbItem>
      <BreadcrumbItem olor={activePage == '/creator' ? 'brand.secondary' : 'black'}>
        <Link href="/creator"> Creator </Link>
      </BreadcrumbItem>
      <Box float="right">
        <BreadcrumbItem color={activePage == '/about' ? 'brand.secondary' : 'black'}>
          <Link href="/about"> About </Link>
        </BreadcrumbItem>
        <BreadcrumbItem paddingLeft="1em" color={activePage == '/my-art' ? 'brand.secondary' : 'black'}>
            <Link href="/my-art"> My Art</Link>
         </BreadcrumbItem>
        </Box>
    </Breadcrumb>

  )
}

export default NavBar;