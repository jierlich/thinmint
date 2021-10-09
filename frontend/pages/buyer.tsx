   
import React from 'react';
import Link from 'next/link'
import { Card } from '../components/card';
import { SimpleGrid, Container, Text } from '@chakra-ui/react'
import { NFTStorage, toGatewayURL } from 'nft.storage'
import { packToBlob } from 'ipfs-car/pack/blob'

interface Props {
    title?: string;
    tokenid?: string;
}

type ProjectMetadata = {
  title: string
  createdFor: string
  thumnailUrl: string
  description: string
}

function BuyerPage(props: Props) {
    const vintageApeMetadata = {
      title: "Vintage Apes",
      createdFor: "Bored Ape Yacht Club",
      thumbnailUrl: toGatewayURL("ipfs://bafybeiaphqbd7mzzrg7kalh7uukat64a5n3rvkscetbxjvwolu3nqhpq7q").href,
      description: "Vintage Apes are test.",
      price: 2,
    }
    
    const projectMetadatas: ProjectMetadata[] = [vintageApeMetadata]

    return (
        <Container maxW="container.md">
          <Text fontWeight="bold" fontSize="6xl"> Thin Mints </Text>
          <SimpleGrid py="24px" columns={{sm: 2, md: 3}} spacing="40px">
            {projectMetadatas.map((metadata) => (
              <Card
                title={metadata.title}
                image={metadata.thumbnailUrl}
                originalProject={metadata.createdFor}
                price={metadata.price}
                key={metadata.title}
              />
            ))}
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