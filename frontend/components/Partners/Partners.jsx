import { Text, Container, Box, Flex, Heading, Button, Image, Input, Divider } from '@chakra-ui/react'


export const PartnersPage = () => {

    return (
<>
        <Flex bgColor="whiteAlpha.900" bg="black"  color="white" flexDirection="row" justifyContent="space-between" height="13vh"  paddingBottom="3vh" paddingTop="3vh" paddingRight="3vw" paddingLeft="3vw">
                <a href="/"><Flex><Heading display="flex" color="white" letterSpacing="-1px">Sāphyr.</Heading><Text fontWeight={"300"}>Pro</Text></Flex></a>

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
     <Box height="100%"paddingBottom="15vh" paddingRight="25vw" paddingLeft="25vw">

         <Box border={"2px"}  borderRadius="10px" borderColor="teal" padding="50px">
    
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Wallet Adress</Heading>
        <Input borderColor="black" placeholder='0x00000000000000000000000' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Brand</Heading>
        <Input borderColor="black" placeholder='Rolex' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Model</Heading>
        <Input borderColor="black" placeholder='DateJust' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Year</Heading>
        <Input borderColor="black" placeholder='1980s' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Series number</Heading>
        <Input borderColor="black" placeholder='#49017' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Dimensions (mm)</Heading>
        <Input borderColor="black" placeholder='#49017' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">Weight</Heading>
        <Input borderColor="black" placeholder='Benouda' marginBottom="40px"/>
        <Heading fontWeight="600" fontSize="25px" marginBottom="10px">About</Heading>
        <Input borderColor="black" placeholder='Benouda' marginBottom="40px"/>

        <Button colorScheme="teal">Create NFT</Button>
        
        </Box>
            
     </Box>

</>
    )

}