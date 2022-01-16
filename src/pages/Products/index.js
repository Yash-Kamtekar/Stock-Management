import React, { useState, useEffect } from "react";
import {
    Box,
    Container,
    Button
} from '@chakra-ui/react';
import { allProducts } from "../../services/Product";
import Productlist from "./components/listproduct";
// import Companylist from "./components/listproduts"
import { useNavigate } from 'react-router-dom';

function Products() {
    let navigate = useNavigate();
    const [products, setProducts] = useState([])

    useEffect(() => { allProducts().then((res) => setProducts(res.data.listProducts.items)) }, [])

    return (
        <>
            <Box my="40px" className="product">
                <Container maxW='container.xl'>
                    <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add Product</Button>
                    <Box className="clear"></Box>
                    <Productlist products={products} setProducts={setProducts} />
                </Container>
            </Box>
        </>
    )
}

export default Products