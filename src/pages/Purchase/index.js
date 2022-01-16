import React, { useState, useEffect, useRef } from "react";
import {
    Box,
    Button,
    Spinner,
    useDisclosure,
    Container
} from '@chakra-ui/react';
import "react-tabulator/css/bulma/tabulator_bulma.min.css";
import Table from "../../common/table";
import { useNavigate } from 'react-router-dom';


function Puchase() {
    let navigate = useNavigate();
    const [companys, setCompanys] = useState([])
    const columns = [
        {
            title: "Sr. No.",
            field: "1",
            hozAlign: "left"
        },
        {
            title: "Product Name",
            field: "product",
            hozAlign: "left"
        },
        {
            title: "Product Image",
            field: "image",
            hozAlign: "left"
        },
        {
            title: "Quantity Left",
            field: "quantity",
            hozAlign: "left"
        },
        {
            title: "Add",
            field: "quantity",
            hozAlign: "left"
        }
    ]
    const columnConfig = {
        placeholder: "No Results",
        movableColumns: true,
        layout: "fitColumns",
        headerFilterPlaceholder: "",
    }
    const [loading, setLoading] = useState(false)
    const tableref = useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box my="40px" className="product">
                <Container maxW='container.xl'>
                    {loading ? (<Box>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Box>) : (
                        <Box>
                            <Table
                                tabledata={companys}
                                columns={columns}
                                options={columnConfig}
                                innerRef={tableref}
                                rowClick={((e, row) => { navigate("/company/" + row.getData().id) })}
                            />

                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

export default Puchase