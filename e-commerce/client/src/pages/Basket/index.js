import { Alert, Badge, Box, Button, Image } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useBasket } from '../../contexts/BasketContext';

const Basket = () => {
    const { items, removeFromBasket } = useBasket();
    const total = items.reduce((acc, obj) => acc + obj.price, 0)
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
                    </>
                )
            }

        </Box>
    )
}

export default Basket