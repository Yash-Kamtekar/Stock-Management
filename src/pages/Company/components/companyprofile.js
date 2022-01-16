import React, { useState, useEffect } from "react";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Box,
    Container,
    Image,
    Text
} from "@chakra-ui/react";
import logo from "../../../assets/company-logo.png";
import Products from "../../Products";
import Sales from "../../Sales";
import { useParams } from "react-router-dom";
import { singleCompany } from "../../../services/Company";

function CompanyProfile() {
    let { id } = useParams();

    const [val, setVal] = useState({ name: "", description: "", image: "" })

    useEffect(() => {
        singleCompany(id).then((res) => setVal(res.data.getCompany))
    }, [])

    return (
        <Box className="company-profile">
            <Box className="banner">
                <Container maxW="container.xl">
                    <Box className="company-title">
                        <Image src={logo} alt="Company Logo" />
                        <Text>{val.name}</Text>
                    </Box>
                </Container>
            </Box>
            <Box className="tabs">
                <Container maxW="container.xl">
                    <Tabs>
                        <TabList>
                            <Tab>Products</Tab>
                            <Tab>Sales</Tab>
                            <Tab>Expenses</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Products />
                            </TabPanel>
                            <TabPanel>
                                <Sales />
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box>
        </Box>
    )
}

export default CompanyProfile