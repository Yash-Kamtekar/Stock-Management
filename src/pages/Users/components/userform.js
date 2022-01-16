import React, { useEffect } from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Box,
    Container,
    Button
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { enableUser, addUserToGroup, disableUser } from "../../../services/Users";
import { UsersRoleUpdate } from "../../../services/DBUser";


function UserDetail(props) {
    useEffect(() => {
        if (props.selectedUser !== null) {
            setValue("email", props.selectedUser.emailAddress)
            setValue("status", props.selectedUser.status ? "Enable" : "Disable")
            setValue("role", props.profile.role)
        }
    }, [])

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {

        if (values.status === "Enable") {
            enableUser(values.email)
                .then(res => {
                }).catch(err => console.log(err))
        }
        else {
            disableUser(values.email)
                .then(res => {
                }).catch(err => console.log(err))
        }

        if (props.selectedUser === null) {
            addUserToGroup(values.email, values.role).then(res => console.log(res))
        }
        else {
            UsersRoleUpdate(values.email, values.role).then(res => console.log(res))
        }
    }
    return (
        <Box>
            <Container maxW="container.xl" mt="30px" className="modal-form">
                <Box className="form" boxSize="sm" mx="auto">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input placeholder="Email Address" id="email" isDisabled={props.selectedUser !== null}
                                {...register("email", { required: "This is required" })} />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.status}>
                            <FormLabel htmlFor="status">User Status</FormLabel>
                            <select {...register("status")}>
                                <option value="Enable">Enable</option>
                                <option value="Disable">Disable</option>
                            </select>
                        </FormControl>

                        <FormControl isInvalid={errors.role}>
                            <FormLabel htmlFor="role">Select Role</FormLabel>
                            <select {...register("role")}>
                                <option value="Admins">Admins</option>
                                <option value="Users">Users</option>
                                <option value="Sales">Sales</option>
                                <option value="Employees">Employees</option>
                                <option value="Purchasers">Purchasers</option>
                            </select>
                        </FormControl>

                        <Button
                            mt={4}
                            type="submit"
                            bgColor="pink.500"
                            color="blue.50"
                            _hover={{ bg: "pink.700" }}
                            float="right"
                            isLoading={isSubmitting}
                        >
                            Save
                        </Button>
                        <Box className="clear"></Box>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}


const mapStateToProps = (state) => { return { profile: state.greduce.profile, roles: state.greduce.roles } }

export default connect(mapStateToProps)(UserDetail)