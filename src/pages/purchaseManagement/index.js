import {
    Box,
    Container,
    Button,
    Spinner
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getPurchaseOrders } from "../../services/Purchases";
import React, { useState, useEffect, useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Table from "../../common/table";

function Purchases() {
    const [orderDetails, setOrderDetails] = useState([])
    const columns = [
        {
            title: "Items",
            field: "items",
            hozAlign: "left"
        },
        {
            title: "Quantities",
            field: "quantity",
            hozAlign: "left"
        },
        {
            title: "Date of Order",
            field: "dateOfOrder",
            hozAlign: "left"
        },
        {
            title: "Supplier's Details",
            field: "supplierDetails",
            hozAlign: "left"
        },
        {
            title: "Total Cost",
            field: "totalCost",
            hozAlign: "left"
        },
        {
            title: "Current Status",
            field: "currentStatus",
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

    useEffect(() => {
        let temp = []
        setLoading(true)
        getPurchaseOrders().then((res) => {
            res.data.listPurchases.items.forEach(element => {
                temp.push({
                    id: element.id,
                    items: element.itemsOrdered,
                    quantity: element.quantity,
                    dateOfOrder: element.dateOfOrder,
                    supplierDetails: element.supplierDetails,
                    totalCost: element.totalCost,
                    currentStatus: element.currentStatus
                })
            });
            setOrderDetails(temp)
        })
        setLoading(false)
    }, [])

    let navigate = useNavigate();

    function exportPDF() {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = "Purchase Orders List";
        const headers = [["ITEMS", "QUANTITIES", "DATE OF ORDER", "SUPPLIERS’ DETAILS", "TOTAL COST", "CURRENT STATUS"]];

        const data = orderDetails.map(elt => [elt.items, elt.quantity, elt.dateOfOrder, elt.supplierDetails, elt.totalCost, elt.currentStatus]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("PurchaseOrderList.pdf")
    }


    return (
        <>
            <Box my="40px" className="purchase">
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
                                tabledata={orderDetails}
                                columns={columns}
                                options={columnConfig}
                                innerRef={tableref}
                            />
                            <Button onClick={exportPDF} float="right" bgColor="pink.500"  color="blue.50" mt="30px" ml="20px" _hover={{ bg: "pink.700" }}>Download as PDF</Button>
                            <Button onClick={() => navigate('create')} float="right" bgColor="pink.500" color="blue.50" mt="30px" mb="30px" _hover={{ bg: "pink.700" }}>Add Orders</Button>
                            <Button onClick={() => navigate('expenditures')} mr="10px" float="right" bgColor="pink.500" color="blue.50" mt="30px" mb="30px" ml="20px" _hover={{ bg: "pink.700" }}>Add Expenditures</Button>
                            <Button onClick={() => navigate('expendituresById')} mr="10px" float="right" bgColor="pink.500" color="blue.50" mt="30px" mb="30px" _hover={{ bg: "pink.700" }}>Get Expenditures</Button>
                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

export default Purchases