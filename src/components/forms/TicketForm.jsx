import { Button, Flex, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form"
import PrimaryInput from "../inputs/PrimaryInput/PrimaryInput";
// import { useFormData } from "../../Context/FormDataContext";



export default function Form(){
   const {errors, register,handleSubmit  } = useForm({mode:'onChange'})

//    const { formData, updateFormData } = useFormData();
    // const onSubmit = (data) => console.log(data)

    const onSubmit = (data) => {
    // Update the form data in the context when the form is submitted
    // updateFormData(data);
    console.log(data);
  };

    return(
            <form onSubmit={handleSubmit(onSubmit)}>
        <VStack w='100%'>
            <Flex gap={10}  w='100%'>
                <PrimaryInput 
                 label='Ticket Subject'
                 errorMessage={errors?.ticketSubject?.message}
                 register={register('ticketSubject', {required:'this field is required'})}
                 required
                />
                <PrimaryInput 
                  label='Ticket Id'
                  register={register('ticketId', {required:'this field is required'})}
                  required
                />
            </Flex>
            <Flex gap={10}  w='100%'>
                <PrimaryInput 
                 label='Assign Staff'
                />
                <PrimaryInput 
                  label='Client'
                />
            </Flex>
            <Flex gap={10}  w='100%' >
                <PrimaryInput 
                 label='Priority'
                 required
                />
                <PrimaryInput 
                 label='CC'
                />
            </Flex>
            <Flex gap={10}  w='100%' >
                <PrimaryInput 
                 label='Assign'
                />
                <PrimaryInput 
                 label='Add Followers'
                />
            </Flex>
            <Flex mt={5}>
                <Button type="submit">Submit</Button>
            </Flex>
        </VStack>
            </form>
    )
}