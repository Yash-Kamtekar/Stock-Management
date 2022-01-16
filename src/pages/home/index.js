import React from "react";
import { connect } from "react-redux";
import { useDisclosure, Button } from '@chakra-ui/react';
import CustomModal from "../../common/modal";
import AddCompany from "../Company/components/addcompany";


function Home(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            {
                props.role === "Role not assigned." ?
                    (<>Role not assigned plese wait or create your own company
                        <Button onClick={() => onOpen()} bgColor="pink.500" color="blue.50" mb="30px" _hover={{ bg: "pink.700" }}>Add Company</Button>
                        <CustomModal
                            isOpen={isOpen}
                            onClose={onClose}
                            title="Add Company"
                            body={<AddCompany />}
                        />
                    </>) : (
                        <>Welcome {props.profile.name} use the sidenav to navigate</>
                    )
            }
        </>
    )
}


const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

export default connect(mapStateToProps)(Home)