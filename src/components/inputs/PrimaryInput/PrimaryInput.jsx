/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from '@chakra-ui/react';
// import { useState } from 'react'


export default function PrimaryInput({
    errorMessage,
    isDisabled,
    label,
    register,
    required,
    type = 'text',
    placeholder
}){
    

    return(
        <FormControl
         isInvalid={!!errorMessage}
         isRequired={required}
        >
            <FormLabel>{label}</FormLabel>

            <InputGroup>
                <Input
                 type={type}
                 borderColor='gray.400'
                 focusBorderColor='black.400'
                 size='sm'
                 isDisabled={isDisabled}
                 placeholder={placeholder}
                 {...register}
                />
            
            </InputGroup>

            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
 
    )
}