import { Link } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Text,
    Button
} from '@chakra-ui/react';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addExpenditure } from "../../../services/Purchases";


function CreateExpenditures() {

    const {
        handleSubmit,
        register,
        formState: { errors}
      } = useForm();
    
      function onSubmit(values,e) {
        return new Promise((resolve) => {
          addExpenditure(values).then((res) => console.log(res))
          e.target.reset();
        }
        )
    }

      const [value, onChange] = useState(new Date());

    return(
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/purchase" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Add Expenditures</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.expenditure}>
                            <FormLabel htmlFor="expenditure">Expenditure</FormLabel>
                            <Input placeholder='Expenditure' id="expenditure" type="number"
                             step="0.1"
                            {...register("expenditur", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.expenditure && errors.expenditure.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.reason}>
                            <FormLabel htmlFor="reason">Reason</FormLabel>
                            <Input placeholder='Reason' id="reason"
                            {...register("reason", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.reason && errors.reason.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.companyId}>
                            <FormLabel htmlFor="companyId">Company Id</FormLabel>
                            <Input placeholder="Company Id" id="companyId"
                            {...register("companyID", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.companyId && errors.companyId.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Button
                            mt={4}
                            type='submit'
                            bgColor="pink.500"
                            color="blue.50"
                            _hover={{ bg: "pink.700" }}
                            float="right"
                        >
                            Submit
                        </Button>
                        <Box className="clear"></Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default CreateExpenditures;