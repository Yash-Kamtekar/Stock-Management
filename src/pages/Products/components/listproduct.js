import React from "react";
import {
    Grid,
    Text,
    Image,
    Box,
    Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import pic1 from "../../../assets/pic1.jpg";
import { FaRegTrashAlt } from 'react-icons/fa';
import { removeProduct } from "../../../services/Product"


function Productlist(props) {

    function deleteProduct(id, index) {
        removeProduct(id)
        let temp = [...props.products]
        temp.splice(index, 1)
        props.setProducts(temp)
    }

    // function editProduct(id, index) {
    //     console.log(id);
    // }

    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={30} textAlign="center" lineHeight="50px" fontSize="18" className="productList">
            {
                props.products.map((item, index) => (
                    <Box className="indiProduct">
                        <Button className="deleteIcon" onClick={() => deleteProduct(item.id, index)}><FaRegTrashAlt /></Button>
                        {/* <Button className="deleteIcon" onClick={() => editProduct(item.id, index)}><FaPen /></Button> */}
                        <Link to={"/products/edit/" + item.id}>
                            <Image src={["", 0, false, NaN, null, undefined].includes(item.image) ? pic1 : "https://d3ii329wbl120x.cloudfront.net/public/" + item.image} alt="" />
                            <Text>{item.name}</Text>
                        </Link>
                    </Box>
                ))
            }
        </Grid>
    )
}

export default Productlist