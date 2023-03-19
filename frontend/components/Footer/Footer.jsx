import { Text, Container, Box, Flex, Heading, Button } from '@chakra-ui/react'


export const FooterPage = () => {
    return (
    <Flex bgColor="white" flexDirection="row" justifyContent="space-between" height="12vh"  paddingBottom="4vh" paddingTop="3vh" paddingRight="3vw" paddingLeft="3vw">
        <Text marginTop="2vh" fontSize="13px" color="black">Copyright 2023 - Ayoub Benouda</Text>

        <Flex>

        <Button colorScheme="teal">Partners space</Button>
        {/* <Flex><Heading margin="0" display="flex" color="black">Saphyr.</Heading></Flex> */}
        </Flex>

    </Flex>


    )
}