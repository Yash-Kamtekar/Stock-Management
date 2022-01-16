import React from "react";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Container,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Flex
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Auth } from 'aws-amplify';
import { connect } from "react-redux";


function TopBar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    async function signOut() {
        try {
            await Auth.signOut().then(() => {
                window.location.reload(false);
            });
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <Box bgColor="blue.50" py="15">
            <Container maxW='container.xl'>
                <Box textAlign="center">
                    <Box float="left">
                        <Button ref={btnRef} bgColor="gray.700" color="gray.100" _hover={{ bg: "pink.600" }} onClick={onOpen}>
                            <FaBars />
                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent py="50px" px="20px" className="sidenav">
                                <DrawerCloseButton />
                                {(props.profile.role === "Admins" || props.profile.role === "Users") && <Link to="/users">Users</Link>}
                                {(props.profile.role === "Admins" || props.profile.role === "Users") && <Link to="/company">Company</Link>}
                                <Link to="/products">Product</Link>
                                <Link to="/sales">Sales</Link>
                                <Link to="/purchase">Purchase</Link>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                    <Box float="right" className="profile">
                        <Menu>
                            <Flex>
                                <Text>{props.profile.name}</Text>
                                <MenuButton>
                                    <FaUserCircle color="pink.800" />
                                </MenuButton>
                            </Flex>
                            <MenuList>
                                <MenuItem onClick={signOut}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Text fontSize={30} w="50%" m="auto">
                        <Link to="/">Mind your Product</Link>
                    </Text>
                    <div className="clear"></div>
                </Box>
            </Container>
        </Box>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

export default connect(mapStateToProps)(TopBar)