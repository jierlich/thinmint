import { Container, Center, Text, Flex, Badge, Image, Box, Spacer, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'

export function Card({
    image,
    title,
    originalProject,
    price,
}: {
    image: string;
    title: string;
    originalProject: string;
    price: number;
}) {
    return (
      
      <Box maxWidth={52} borderWidth="1px" borderRadius="lg" overflow="hidden" >
        <Center p="8px" pb="12px">
          <Image borderRadius="4px" src={image} alt="Image of Derivative NFT" />
        </Center>
        <Box px="8px" mb="4px">
          <Flex>
            <Text 
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              ml="2px"
            >Title</Text>
            <Spacer />
            <Text
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              mr="2px"
            >Price</Text>
          </Flex>
          <Flex>
            <Text
              fontWeight="bold"
              ml="2px"
            >
              {title}
            </Text>
            <Spacer />
            <Image w="8px" mr="2px" src="../../ethereum-logo.svg"/>
            <Text>
              {(price / 100).toFixed(2)}
            </Text>
          </Flex>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2px"
          >
            Created for: {originalProject}
          </Text>
          <Text color='brand.tertiary' fontWeight='bold'>
            <Link color='brand.primary' href="/buyer/[tokenid]" as={`/buyer/1`}>  
                Mint Me
            </Link> 
          </Text>
        </Box>
      </Box>
    //     <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    //   <Image src={`../../${image}`} alt="Image of Derivative NFT" />

    //   <Box p="6">
    //     <Box d="flex" alignItems="baseline">
    //       <Badge borderRadius="full" px="2" colorScheme="teal">
    //         New
    //       </Badge>
    //     </Box>

    //     <Box
    //       mt="1"
    //       fontWeight="semibold"
    //       as="h4"
    //       lineHeight="tight"
    //       isTruncated
    //     >
    //       {title}
    //     </Box>

    //     <Box>
    //       {(price / 100).toFixed(2)}
    //     </Box>
    //   </Box>
    // </Box>
    )
}
