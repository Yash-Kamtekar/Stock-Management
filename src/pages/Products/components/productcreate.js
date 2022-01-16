import React from "react";
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
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { addProduct } from "../../../services/Product"
import { useNavigate } from "react-router-dom"
import { Storage } from "aws-amplify";

function ProductCreate() {
    let navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        console.log(values);
        return new Promise((resolve) => {
            setTimeout(() => {
                Storage.put(values.image[0].name, values.image[0]).then(((res) => {
                    values["image"] = res.key
                    addProduct({ input: values }).then(() => {
                        navigate('/products')
                    }).catch((err) => console.log(err));
                }));
                resolve();
            }, 8000);
        });
    }

    return (
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/products" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Add a New Product</Text>
                    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor="name">Product Name</FormLabel>
                            <Input placeholder='Product Name' id="name"
                                {...register("name", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.description}>
                            <FormLabel htmlFor="description">Product Description</FormLabel>
                            <Input placeholder='Product Description' id="description"
                                {...register("description", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.description && errors.description.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.image}>
                            <FormLabel htmlFor="image">Upload Image</FormLabel>
                            <Input type="file" id="image"
                                {...register("image", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.image && errors.image.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.price}>
                            <FormLabel htmlFor="price">Product Price</FormLabel>
                            <Input placeholder='Product Price' id="price"
                                {...register("price", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.price && errors.price.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl mt={4} isInvalid={errors.price}>
                            <FormLabel htmlFor="quantity">Quantity</FormLabel>
                            <Input placeholder='Quantity' id="quantity"
                                {...register("quantity", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.quantity && errors.quantity.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Button
                            mt={4}
                            type='submit'
                            bgColor="pink.500"
                            color="blue.50"
                            _hover={{ bg: "pink.700" }}
                            float="right"
                            isLoading={isSubmitting}
                        >
                            Save
                        </Button>
                        <Box className="clear"></Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default ProductCreate;