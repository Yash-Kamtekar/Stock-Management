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
import { addPurchaseOrders } from "../../../services/Purchases";

function CreatePurchase(){
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
      } = useForm();
    
      function onSubmit(values, e) {
        return new Promise((resolve) => {
            addPurchaseOrders(values).then((res) => console.log('ordered items',res))
            e.target.reset();
        });
      }

      const [value, onChange] = useState(new Date());

    return(
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/purchase" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Add a New Order</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.expenditure}>
                            <FormLabel htmlFor="itemsOrdered">Items Ordered</FormLabel>
                            <Input placeholder='Items Ordered' id="itemsOrdered"
                            {...register("itemsOrdered", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.itemsOrdered && errors.itemsOrdered.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.quantity}>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <Input placeholder='Quantity' id="quantity" type="number"
                            {...register("quantity", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.quantity && errors.quantity.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.dateOfOrder}>
                            <FormLabel htmlFor="dateOfOrder">Date of Order</FormLabel>
                            <Input placeholder="Date of Order" id="dateOfOrder" type="date"
                            {...register("dateOfOrder", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.dateOfOrder && errors.dateOfOrder.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.supplierDetails}>
                            <FormLabel htmlFor="supplierDetails">Supplier's Details</FormLabel>
                            <Input placeholder='Suppliers Details' id="supplierDetails"
                            {...register("supplierDetails", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.supplierDetails && errors.supplierDetails.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.totalCost}>
                            <FormLabel htmlFor="totalCost">Total Cost</FormLabel>
                            <Input placeholder='Total Cost' id="totalCost"
                            {...register("totalCost", {required: "This is required"})} />
                            <FormErrorMessage>
                                {errors.totalCost && errors.totalCost.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.currentStatus}>
                            <FormLabel htmlFor="currentStatus">Current Status</FormLabel>
                            <select name="selectList" id="currentStatus" {...register("currentStatus", {required: "This is required"})} >
                                <option value="Ordered">Ordered</option>
                                 <option value="Pending">Pending</option>
                                 <option value="Received">Received</option>
                            </select>
                            <FormErrorMessage>
                                {errors.currentStatus && errors.currentStatus.message}
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

export default CreatePurchase;