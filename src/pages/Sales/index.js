import React, { useState, useEffect, useRef } from "react";
import { allSales } from "../../services/Sales";
import Table from "../../common/table";
import CustomModal from "../../common/modal";
import EditSale from "./component/editsale";
import "react-tabulator/css/bulma/tabulator_bulma.min.css";
import {
    Box,
    Button,
    Spinner,
    useDisclosure,
    Container
} from '@chakra-ui/react';


function Sales() {
    const [sales, setSales] = useState([])
    const [selectedSales, setSelectedSales] = useState(null)
    const columns = [
        {
            title: "Sr. No.",
            field: "srno",
            hozAlign: "left"
        },
        {
            title: "Product Name",
            field: "product",
            hozAlign: "left"
        },
        {
            title: "Product Description",
            field: "description",
            hozAlign: "left"
        },
        {
            title: "Quantity Left",
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

    useEffect(() => {
        setLoading(true)
        let temp = []
        allSales().then(res => {
            res.data.listSales.items.forEach((element, index) => {
                temp.push({
                    id: element.product.id,
                    srno: index + 1,
                    product: element.product.name,
                    description: element.product.description,
                    quantity: element.quantity
                })
            });
            setSales(temp)
        })
        setLoading(false)
    }, [])

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
                                tabledata={sales}
                                columns={columns}
                                options={columnConfig}
                                innerRef={tableref}
                                rowClick={((e, row) => {
                                    setSelectedSales(row.getData())
                                    onOpen()
                                })}
                            />
                            <CustomModal
                                isOpen={isOpen}
                                onClose={onClose}
                                title="Add Sales"
                                body={<EditSale selectedSales={selectedSales} />}
                            />

                            <Button
                                onClick={() => {
                                    setSelectedSales(null)
                                    onOpen()
                                }}
                                float="right"
                                bgColor="pink.500"
                                color="blue.50"
                                mb="30px"
                                _hover={{ bg: "pink.700" }}
                            >
                                Add Sales
                            </Button>

                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

export default Sales