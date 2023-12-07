

import { Button, Card, CardBody, CardHeader, Flex, Heading, RangeSlider, RangeSliderFilledTrack,  RangeSliderTrack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import TicketTable from "../components/TicketTable/TicketTable";
import ModalForm from "../components/Modal/ModalForm";

export default function HomePage(){
     const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <VStack w='100%' alignItems='flex-start' px={10}> 
            <Flex justifyContent='space-between' mt={5} w='100%'>
                <VStack>
                    <Heading >Tickets</Heading>
                    <Text>Dashboard / Tickets</Text>
                </VStack>
                <Button borderRadius={20} colorScheme='orange' onClick={onOpen}>+ Add Ticket</Button>
            </Flex>
            {/* cards */}
            <Flex gap={4} mt={10} w='100%'>
                {/* 1st card */}
                    <Card >
                    <CardHeader gap='13rem' display={'flex'} flexDirection='row'>
                        <Text fontWeight='bold' >Tickets</Text>
                        
                        <Text fontWeight='bold' >+10%</Text>
                    </CardHeader>
                    <CardBody>
                        <Text fontWeight='bold' fontSize={20}>122</Text>

                        <RangeSlider aria-label={['max']} colorScheme='orange' defaultValue={[0]}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            
                            {/* <RangeSliderThumb index={1} /> */}
                        </RangeSlider>
                    </CardBody>
                    </Card>

                {/* 2nd card */}
                    <Card >
                    <CardHeader gap='13rem' display={'flex'} flexDirection='row'>
                        <Text fontWeight='bold' >Tickets</Text>
                        <Text fontWeight='bold' >+10%</Text>
                    </CardHeader>
                    <CardBody>
                        <Text fontWeight='bold' fontSize={20}>122</Text>

                        <RangeSlider  aria-label={[ 'max']} colorScheme='orange' defaultValue={[10]}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            
                            {/* <RangeSliderThumb index={1} /> */}
                        </RangeSlider>
                    </CardBody>
                    </Card>

                {/* 3rd card */}
                    <Card >
                    <CardHeader gap='13rem' display={'flex'} flexDirection='row'>
                        <Text fontWeight='bold' >Tickets</Text>
                        <Text fontWeight='bold' >+10%</Text>
                    </CardHeader>
                    <CardBody>
                        <Text fontWeight='bold' fontSize={20}>122</Text>

                        <RangeSlider aria-label={['max']} colorScheme='orange' defaultValue={[0]}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            
                            {/* <RangeSliderThumb index={1} /> */}
                        </RangeSlider>
                    </CardBody>
                    </Card>

                {/* 4th card */}
                    <Card >
                    <CardHeader gap='13rem' display={'flex'} flexDirection='row'>
                        <Text fontWeight='bold' >Tickets</Text>
                        <Text fontWeight='bold' >+10%</Text>
                    </CardHeader>
                    <CardBody>
                        <Text fontWeight='bold' fontSize={20}>122</Text>

                        <RangeSlider aria-label={[ 'max']} colorScheme='orange' defaultValue={[0]}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack />
                            </RangeSliderTrack>
                            
                            {/* <RangeSliderThumb index={1} /> */}
                        </RangeSlider>
                    </CardBody>
                    </Card>
               
            </Flex>

            {/* Table */}
            <TicketTable />
            
            <ModalForm isOpen={isOpen} onClose={onClose} on/>
        </VStack>
    )
}