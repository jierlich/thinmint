   
import React from 'react';
import Link from 'next/link'
import { Card } from '../components/card';
import { SimpleGrid, Container, Text } from '@chakra-ui/react'

interface Props {
    title?: string;
    tokenid?: string;
}

function BuyerPage(props: Props) {

    // TODO: Pull info from IPFS here
    // TODO: Format info from IPFS here
    
    let NFTList: any = []
    // TODO: Change filler function once we actually pull info from IPFS
    // for all NFTs in a project
    for (let i = 0; i < 11; i++) {
        NFTList.push(
            <Card image="Rectangle_38_gradient.png" title="GradientPunks" originalProject="CryptoPunk" price={400} />
        )
    }

    return (
        <Container maxW="container.md">
          <Text fontWeight="bold" fontSize="6xl"> Thin Mints </Text>
          <div>
            <p>Should render the title {props.title}</p> 
            <Link href="/buyer/[tokenid]" as={`/buyer/${props.tokenid}`}> 
              <a>Let's Pretend this is a derivative: {props.tokenid} </a>
            </Link>
          </div>
          <SimpleGrid py="24px" columns={{sm: 2, md: 3}} spacing="40px">
              {NFTList}
          </SimpleGrid>
        </Container>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            title: 'Buy Cookies',
            tokenid: '123',
        },
    };
};

export default BuyerPage;