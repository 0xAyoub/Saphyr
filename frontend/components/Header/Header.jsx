import { Text, Container, Box, Flex, Heading, Button } from '@chakra-ui/react'


export const HeaderPage = () => {
    return (

    <Flex bgColor="whiteAlpha.900"  flexDirection="row" justifyContent="space-between" height="13vh"  paddingBottom="3vh" paddingTop="3vh" paddingRight="3vw" paddingLeft="3vw">
                <a href="/"><Flex><Heading display="flex" color="black" letterSpacing="-1px">Sāphyr.</Heading></Flex></a>

                <Flex>
                    <Flex marginTop="1.2vh" marginRight="25px">
                        <a href="/"><Text  color="black" marginRight="25px">Partners</Text></a> 
                        <a href="/"><Text  color="black" marginRight="25px">How it works</Text></a> 
                        <a href="/"><Text  color="black" marginRight="25px">Technology</Text></a> 
                        <a href="/"><Text color="black">About us</Text></a>
                    </Flex>
                    <Flex>
                        <Button bg="black" color="white" marginRight="15px" fontWeight="500">Authenticate my item</Button>
                        {/* <Button colorScheme="purple" variant="outline" fontWeight="500">Sign Up</Button>  */}
                    </Flex>
                </Flex>
    </Flex>


    )
}