import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'

function CustomModal(props) {
    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {props.body !== undefined ? (
                            <>{props.body}</>
                        ) : (
                            <></>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CustomModal