import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { MaterialSymbolsSearch } from "../../assets/icons/Material Design/mdIcons";

export default function TopNav(){
    return(
        <Box position='sticky' top={0} bg='#fd7f59' flexGrow={1} h='4rem' w='100%' px={5} flexDirection='row'>
            <Flex  gap={3} my={5}>
                <Image src="C:\Users\Saikumar\OneDrive\Desktop\Dashboard-React\Dashboard\src\components\TopNav\logo.jpg" alt="" />
                <Heading fontSize={20}>Dreams Technologies</Heading>
                <Spacer />
                <Flex position='relative'>
                    <Input w='70%'px={1} placeholder='Search' size='md' variant='unstyled' border='0.5px solid black'  fontSize={20} />
                    <IconButton position='absolute' bgColor='transparent' size='lg' top='-5px' right='7rem' aria-label='Search database' icon={<MaterialSymbolsSearch />} />
                </Flex>
            </Flex>
           
          
        </Box>
    )
}