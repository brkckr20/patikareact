import {
    Alert, Badge, Box, Button, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Textarea
} from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { postOrder } from '../../api';
import { useBasket } from '../../contexts/BasketContext';

const Basket = () => {

    const [address, setAddress] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null)

    const { items, removeFromBasket, emptyBasket } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0)


    const handleSubmitForm = async () => {
        const itemIds = items.map((item) => item._id);
        const input = {
            address,
            items: JSON.stringify(itemIds)
        }
        await postOrder(input);
        emptyBasket();
        onclose()
        // console.log(response)
    }

    return (
        <Box p={5}>
            {
                items.length < 1 && (
                    <Alert status='warning'>Sepetiniz Boş</Alert>
                )
            }

            {
                items.length > 0 && (
                    <>
                        <ul style={{ listStyleType: "decimal" }}>
                            {
                                items.map((item) => (
                                    <li key={item._id} style={{ marginBottom: "10px" }}>
                                        <Link to={`/product/${item._id}`}>
                                            {item.title} - {item.price} TL

                                            <Image htmlWidth={200} src={item.photos[0]} alt="basket item" loading='lazy'></Image>
                                        </Link>
                                        <Button mt={2} size="sm" colorScheme="linkedin" onClick={() => removeFromBasket(item._id)}>Remove</Button>
                                    </li>
                                ))
                            }
                        </ul>
                        <Box mt={10}>Total - <Badge colorScheme="purple">{total} TL</Badge></Box>
                        <Button onClick={onOpen} mt={2} size="sm" colorScheme="green">Order</Button>
                        <Modal
                            initialFocusRef={initialRef}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Order</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody pb={6}>
                                    <FormControl>
                                        <FormLabel>Address</FormLabel>
                                        <Textarea ref={initialRef} placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </FormControl>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                        Save
                                    </Button>
                                    <Button onClick={onClose}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                )
            }

        </Box>
    )
}

export default Basket