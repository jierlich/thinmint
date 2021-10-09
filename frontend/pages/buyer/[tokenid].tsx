import { useRouter } from 'next/router'
import { Image, Box, extendTheme, Text, Button, createStandaloneToast } from "@chakra-ui/react"
import { ethers } from "ethers";


const toast = createStandaloneToast()
var alt721abi = require('./alt721abi.json')
async function connectToWallet() {
	window.ethereum.enable();
}

let contract = {};
let signer = {};

function connectToContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  // Bored Ape Yacht Club
  const contractAddress = "0x97AB7fE5247Af76Af50CFFCb841051AB483f8326";
  contract = new ethers.Contract(contractAddress, alt721abi, signer);
  contract.name(signer.getAddress())
     .then(text => {
       console.log(text);
        const data = text || JSON.parse(text);
        ToastSuccess(data);
     })
    .catch(error => {
    	console.log(error);
    	ToastError(error)
    	new Error(error)}
    	);

}

function mintToken(_tokenId) {
  const overrides = {
    value: ethers.utils.parseEther("0.1")
  }
  contract.mint(_tokenId, overrides);
}

function ToastSuccess(data) {
  return (
    toast({
        title: "Alt 721 Connection Successful",
        description: data,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-left"
    })
  )
}

function ToastError(data) {
	return(
      toast({
  		title: "An error occurred.",
  		description: "Unable to mint Thin Mint.",
  		status: "error",
  		duration: 9000,
  		isClosable: true,
  		position: "bottom-left",
  		color: "blue",
    })
  )
}

function loadDerivative(tokenid)  {
	// Needs IPFS
	return {
		image_url: 'Rectangle_38_gradient.png',
		metadata: {
			'title': 'Gradient Punks',
			'detail': 'Basically, ASCIIPunks are what would happen if the CryptoPunks fell into a portal and wound up in the terminal dimension! These little dudes are comprised of 12x12 lines of ASCII text generated entirely on-chain! \n \nThat\'s right! When each little punk is minted, a generative algorithm is run to produce a random punk, which you can see an example of here. Each punk is self-contained on the ethereum blockchain. In other words, the NFT itself is the art.',
			'price': '0.04',
		}
	}
}

function loadOriginal(tokenid) {
	// Needs IPFS I think?
	return {
		image_url: 'Rectangle_38.png'
	}
}


function handleClick() {
    console.log('Click happened');
    connectToContract();
    mintToken(0);
}


const derivativeContainer = {
  padding: '3rem',
  paddingBottom: '4rem',

};
const derivativeMeta = {
	float: 'left',
	paddingLeft: '3rem',
	maxWidth: '80%',
	wordWrap: 'break-word',
}
const originalContainer = {
    padding: '1rem 5rem',
	height: '250px',
    width: '600px',
    border: '1px solid black',
    borderRadius: '25px',
    float: 'left',
    marginTop: '10%',
    marginLeft: '8%',
}
const transactionInformation = {
	wordWrap: 'break-word',
	width: '70%',
	textAlign: 'center',
	marginTop: '1rem',
}




const TokenId = () => {
  const router = useRouter();
  const { tokenid } = router.query;
  const derivativeObject = loadDerivative(tokenid);
  const orginalObject = loadOriginal(tokenid);
  if (typeof window !== "undefined") {
       connectToWallet();
  }

  return (
  	<div>
  	<div style={derivativeContainer} >
  	  <Image boxSize = '250px' float='left' src={`../${derivativeObject.image_url}`} />
  	  <div style={derivativeMeta}>
  	    <p>Project</p>
  	    <Text paddingTop=".5rem" textStyle="h2">  {`${derivativeObject.metadata.title}`} </Text>
  	    <Text paddingTop="1rem" textStyle="p2">{`${derivativeObject.metadata.detail}`}</Text>
  	  </div>
  	</div>
  	<div style={originalContainer} >
  	  <Text paddingBottom=".5rem" textStyle="h2">  Commission a Thin Mint </Text>
  	  <Image boxSize = '150px' float='left' src={`../${orginalObject.image_url}`} />
  	  <div style={transactionInformation}>
  	    <p>Projects</p>
  	    <Text textStyle="p2">CryptoPunk and GradientPunk</Text>
  	    <p>Price</p>
  	    <Text textStyle="p1">{`${derivativeObject.metadata.price}`} ETH
  	    <span> <Button onClick={handleClick} bg="brand.primary" padding="0 4rem" position="absolute" marginLeft="30px"> Mint </Button> </span>
  	    </Text>
  	  </div>
  	</div>
  	</div>
  	)
}

export default TokenId