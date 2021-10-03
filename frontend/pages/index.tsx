import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Text } from '@chakra-ui/react'
import Typist from 'react-typist';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thin Mints</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Text fontSize="6xl">Thin Mints</Text>
          <div>
            <Text>
              Mint custom fan art linked to your
              <Typist>CryptoPunk</Typist> 
            </Text>
          </div>
        </Container>
      </main>

      <footer className={styles.footer}>
        <p>Made with &lt;3</p>
      </footer>
    </div>
  )
}
