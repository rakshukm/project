import { Table,  TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
// import { useFormData } from "../../Context/FormDataContext";

export default function TicketTable(){
//  const { formData } = useFormData();

//  console.log({formData});

    return(
        <>
            <TableContainer>
                <Table variant='striped' colorScheme='gray'>
                   
                    <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Ticket Id</Th>
                        <Th>Ticket Subject</Th>
                        <Th>Assigned Staff</Th>
                        <Th>Created Date</Th>
                        <Th>Last Reply</Th>
                        <Th>Priority</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>1</Td>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>1</Td>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td >30.48</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    <Tr>
                        <Td>1</Td>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td >0.91444</Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                    </Tbody>
                    
                </Table>
            </TableContainer>
        </>
    )
}