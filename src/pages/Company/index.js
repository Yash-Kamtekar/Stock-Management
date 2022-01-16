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
import CustomModal from "../../common/modal";
import AddCompany from "./components/addcompany";
import { allCompanys } from "../../services/Company";
import { useNavigate } from 'react-router-dom';


function Company() {
    let navigate = useNavigate();
    const [companys, setCompanys] = useState([])
    const columns = [
        {
            title: "Company Name",
            field: "name",
            hozAlign: "left"
        },
        {
            title: "Company Owner",
            field: "owner",
            hozAlign: "left"
        },
        {
            title: "Company created",
            field: "createdAt",
            hozAlign: "left"
        },
        {
            title: "Company Description",
            field: "description",
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
        let temp = []
        setLoading(true)
        allCompanys().then((res) => {
            res.data.listCompanys.items.forEach(element => {
                temp.push({
                    id: element.id,
                    name: element.name,
                    owner: element.owner !== null ? element.owner.name : null,
                    createdAt: element.createdAt,
                    description: element.description
                })
            });
            setCompanys(temp)
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
                                tabledata={companys}
                                columns={columns}
                                options={columnConfig}
                                innerRef={tableref}
                                rowClick={((e, row) => { navigate("/company/" + row.getData().id) })}
                            />
                            <CustomModal
                                isOpen={isOpen}
                                onClose={onClose}
                                title="Add Company"
                                body={<AddCompany setCompanys={setCompanys} />}
                            />
                            <Button
                                onClick={() => {
                                    onOpen()
                                }}
                                float="right"
                                bgColor="pink.500"
                                color="blue.50"
                                mt="30px"
                                _hover={{ bg: "pink.700" }}
                            >
                                Add Company
                            </Button>

                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

export default Company