import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { singleProduct, editProduct } from "../../../services/Product"
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
import { useNavigate } from 'react-router-dom';


function ProductEdit() {
    let navigate = useNavigate();
    let { id } = useParams();

    // const [val, setVal] = useState({ name: "", description: "", price: "", quantity: "", image: "" })
    useEffect(() => {
        singleProduct(id).then((res) => {
            setValue("name", res.data.getProduct.name)
            setValue("description", res.data.getProduct.description)
            setValue("image", res.data.getProduct.image)
            setValue("price", res.data.getProduct.price)
            setValue("quantity", res.data.getProduct.quantity)
        })

    }, [])

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm({ mode: 'onBlur' });

    function onSubmit(values) {
        values["id"] = id
        return new Promise((resolve) => {
            setTimeout(() => {
                editProduct({ input: values }).then(() => {
                    navigate('/products')
                }).catch((err) => console.log(err));
                resolve();
            }, 3000);
        });
    }


    return (
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/products" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <Text fontSize='3xl' mb="20px">Edit your Product</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            <FormLabel htmlFor="image">Image</FormLabel>
                            <Input placeholder='Product Image' id="image" />
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

export default ProductEdit