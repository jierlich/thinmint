   
import { Container, Text, Box, Center, Image, Stack, HStack } from '@chakra-ui/react';
import React from 'react';
import Typist from 'react-typist';
import { Card } from '../components/card';

function AboutPage() {
  return (
    <Box>
      <Center bgGradient="linear(to-l, teal.500, green.500)" h="300px"> 
        <Stack alignItems="center" spacing="1px">
          <Text fontSize="6xl" color="white" fontWeight="bold">
            Thin Mints
          </Text>
          <Text fontSize="lg" color="gray.200" fontWeight="normal">
            Mint custom fan art linked to your Bored Ape
          </Text>
        </Stack>
      </Center>
      <Container py="28px" maxW="container.lg">
        <Center><Image boxSize="400px" src="../Network 11.svg"/></Center>
        <Stack>
          <Text pt="28px" fontSize="4xl" fontWeight="bold">
            A verifiable way to build your crypto universe
          </Text>
          <Text pb="12px" fontSize="lg">
            The world is changing with the advent and growth of NFTs.
            The new asset class is becoming increasingly linked to identity.
          </Text>
          <Text pb="12px" fontSize="lg">
            Derivative art let’s people express themselves while paying homage to the original works that we know and love.
          </Text>
          <Text pb="12px" fontSize="lg">
            However, it adds noise and friction for any user... there are dozens of projects spinning up with no on-chain linking to the original.
          </Text>
          <Text pb="12px" fontSize="lg">
            Thin Mints is a platform for independent artists to publish fan art for popular NFT collections. Original owners can view published derivatives, and commission a custom version for their NFT.
          </Text>
          <Text py="28px" fontSize="4xl" fontWeight="bold">
            Gain credibility by linking your fan art to the original
          </Text>
          <Center><Image h="250px" src="../Derivative.svg"/></Center>
          <Text pt="28px" pb="12px" fontSize="lg">
            Improve your distribution as an artist by linking your fan art to the original collection.
          </Text>
          <Text pb="12px" fontSize="lg">
            Increase the value of your original artwork by building out a bundle. The whole is greater than the sum of its parts.
          </Text>
          <Text py="28px" fontSize="4xl" fontWeight="bold">
            Owners of the original collection can explore published fan art.
          </Text>
          <Center>
          <HStack spacing={8}>
          <Card image="Rectangle_38_gradient.png" title="GradientPunk" originalProject="CryptoPunk" price={400} />
          <Card image="Rectangle_38_gradient.png" title="GradientPunk" originalProject="CryptoPunk" price={400} />
          <Card image="Rectangle_38_gradient.png" title="GradientPunk" originalProject="CryptoPunk" price={400} />
          </HStack>
          </Center>
          <Text py="28px" fontSize="4xl" fontWeight="bold">
            If you like a fan’s project, you can commission a piece based on your original.
          </Text>
          <Center><Image h="300px" src="../connect wallet.png"/></Center>
          <Text py="28px" fontSize="4xl" fontWeight="bold">
            Mint and build your universe!
          </Text>
          <Center><Image h="500px" src="../Network 11.svg"/></Center>
        </Stack>
      </Container>
    </Box>
  )
}

export default AboutPage;
