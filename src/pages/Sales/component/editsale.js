import React, { useState, useEffect } from "react";
import { addSale, editSale, removeSale } from "../../../services/Sales";
import { allProducts } from "../../../services/Product";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Button
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";


function EditSale(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        allProducts().then(res => setProducts(res.data.listProducts.items))
        console.log(props)
        if (props.selectedSales !== null) {
            setValue("productName", props.selectedSales.product)
            setValue("quantity", props.selectedSales.quantity)
        }
    }, [])

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        if (props.selectedSales !== null) {
            console.log({ input: { id: props.selectedSales.id, quantity: values.quantity } })
            editSale({ input: { id: props.selectedSales.id, quantity: values.quantity } }).then(res => console.log(res))
        }
        else {
            console.log({ input: { id: values.product, quantity: values.quantity } })
            addSale({ input: { id: values.product, quantity: values.quantity } }).then(res => console.log(res))
        }
    }

    function deleteProduct() {
        console.log(props.selectedSales.id);
        // removeSale(props.selectedSales.id).then(res => console.log(res))
    }

    return (
        <Box>
            <Container maxW="container.xl" mt="30px" className="modal-form">
                <Box className="form" boxSize="sm" mx="auto">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {
                            props.selectedSales === null ? (
                                <FormControl isInvalid={errors.product}>
                                    <FormLabel htmlFor="product">Select Product</FormLabel>
                                    <select {...register("product")}>
                                        {products.map(item => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                </FormControl>) : (
                                <FormControl isInvalid={errors.productName}>
                                    <FormLabel htmlFor="productName">Product Name</FormLabel>
                                    <Input placeholder="Product Name" id="productName" isDisabled={props.selectedSales !== null}
                                        {...register("productName", { required: "This is required" })} />
                                    <FormErrorMessage>
                                        {errors.productName && errors.productName.message}
                                    </FormErrorMessage>
                                </FormControl>
                            )}

                        <FormControl isInvalid={errors.quantity}>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <input placeholder="Enter Quantity" id="quantity" type="number" {...register("quantity", { min: 0 })} />
                            <FormErrorMessage>{errors.quantity && errors.quantity.message}</FormErrorMessage>
                        </FormControl>

                        {/* {errors.quantity && (
                                <p>Enter quantity</p>
                            )} */}

                        <Button
                            mt={4}
                            type="submit"
                            bgColor="pink.500"
                            color="blue.50"
                            _hover={{ bg: "pink.700" }}
                            float="right"
                            isLoading={isSubmitting}
                        >
                            Save
                        </Button>
                        {
                            props.selectedSales !== null && <Button
                                mt={4}
                                mr={2}
                                bgColor="pink.500"
                                color="blue.50"
                                _hover={{ bg: "pink.700" }}
                                float="right"
                                onClick={() => deleteProduct()}
                            >
                                Delete Sales
                            </Button>
                        }
                        <Box className="clear"></Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}


export default EditSale