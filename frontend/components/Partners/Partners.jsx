import { Text, Container, Box, Flex, Heading, Button, Image, Input, Divider } from '@chakra-ui/react'


export const PartnersPage = () => {

    return (
<>
        <Flex bgColor="whiteAlpha.900" bg="black"  color="white" flexDirection="row" justifyContent="space-between" height="13vh"  paddingBottom="3vh" paddingTop="3vh" paddingRight="3vw" paddingLeft="3vw">
                <Flex><Heading display="flex" color="white" letterSpacing="-1px">Sāphyr.</Heading><Text fontWeight={"300"}>Pro</Text></Flex>

                <Flex>
                    {/* <Flex marginTop="1.2vh" marginRight="25px">
                        <a href="/"><Text  color="black" marginRight="25px">Partners</Text></a> 
                        <a href="/"><Text  color="black" marginRight="25px">How it works</Text></a> 
                        <a href="/"><Text  color="black" marginRight="25px">Technology</Text></a> 
                        <a href="/"><Text color="black">About us</Text></a>
                    </Flex> */}
                    <Flex>
                        <Button bg="white" color="black" marginRight="15px" fontWeight="500">Connect button</Button>
                        {/* <Button colorScheme="purple" variant="outline" fontWeight="500">Sign Up</Button>  */}
                    </Flex>
                </Flex>
        </Flex>



    <Box height="10vh"  paddingTop="15vh" paddingBottom="15vh" paddingRight="25vw" paddingLeft="25vw"textAlign="center">
            <Heading>Partners Interface</Heading>
    </Box>
     <Box height="100vh"paddingBottom="15vh" paddingRight="25vw" paddingLeft="25vw">

    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Wallet Adress</Heading>
    <Input placeholder='0x00000000000000000000000' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Brand</Heading>
    <Input placeholder='Rolex' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Model</Heading>
    <Input placeholder='DateJust' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Year</Heading>
    <Input placeholder='1980s' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Series number</Heading>
    <Input placeholder='#49017' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Dimensions (mm)</Heading>
    <Input placeholder='#49017' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Weight</Heading>
    <Input placeholder='Benouda' marginBottom="40px"/>
    <Heading fontWeight="600" fontSize="25px" marginBottom="10px">About</Heading>
    <Input placeholder='Benouda' marginBottom="40px"/>


    <Button colorScheme="teal">Create NFT</Button>
        

     </Box>

</>
    )

}