import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import Form from "../forms/TicketForm";

// eslint-disable-next-line react/prop-types
export default function ModalForm({isOpen, onClose}){
    
    return(
        <Modal onClose={onClose} isOpen={isOpen} size='4xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Add Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form />
          </ModalBody>
          
        </ModalContent>
      </Modal>
    )
}