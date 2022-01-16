import { Link } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Button,
    Spinner
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { getExpendituresById } from "../../../services/Purchases";
import Table from "../../../common/table";
import React, { useState, useRef } from "react";

function GetExpenditures() {


    const columns = [
        {
            title: "Expenditure",
            field: "expenditur",
            hozAlign: "left"
        },
        {
            title: "Reason",
            field: "reason",
            hozAlign: "left"
        },
        {
            title: "Company Id",
            field: "companyID",
            hozAlign: "left"
        }
    ]

    const columnConfig = {
        placeholder: "No Results",
        movableColumns: true,
        layout: "fitColumns",
        headerFilterPlaceholder: "",
    }

    const tableref = useRef(null)

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const [expenditureDetails, setExpenditureDetails] = useState([])
    const [expenditureSum, setExpenditureSum] = useState(0)
    const [loading, setLoading] = useState(false)



    function onSubmit(values, e) {
        let count = 0;
        return new Promise((resolve) => {
            setLoading(true)
            getExpendituresById(values.companyId).then((res) => {
                setExpenditureDetails(res.data.listExpenditures.items);
                e.target.reset();
                res.data.listExpenditures.items.forEach(res => {
                    count = count + res.expenditur
                })
                setExpenditureSum(count)
                setLoading(false)
            })
        });
    }


    return (
        <Box>
            <Container maxW='container.xl' mt="30px">
                <Link to="/purchase" className="btn-custom">Back</Link>
                <Box className="form" boxSize="sm" mx="auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.companyId}>
                            <FormLabel htmlFor="companyId">Enter Company Id</FormLabel>
                            <Input placeholder='Enter Company Id' id="companyId"
                                {...register("companyId", { required: "This is required" })} />
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
                            Get Expenditures
                        </Button>
                        <Box className="clear"></Box>
                    </form>

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
                                            tabledata={expenditureDetails}
                                            columns={columns}
                                            options={columnConfig}
                                            innerRef={tableref}
                                        />
                                    </Box>
                                )}
                            </Container>
                        </Box>
                    </>
                    { expenditureDetails[0] ? (<h3>Sum Of Expenditures for company Id { expenditureDetails[0]?.companyID } is :  {expenditureSum}</h3>) : (<p></p>)  }
                   
                </Box>
            </Container>
        </Box>
    )

}

export default GetExpenditures