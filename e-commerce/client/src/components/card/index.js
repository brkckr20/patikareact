import { Box, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { useBasket } from '../../contexts/BasketContext';


const Card = ({ item }) => {

    const { items, addToBasket } = useBasket();
    const findBasketItem = items && items.find(
        (basket_item) => basket_item._id === item && item._id
    );


    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to={`/product/${item && item._id}`}>
                <Image src={item && item.photos[0]} alt='product' loading='lazy' />
                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        {moment(item && item.createdAt).format('DD.MM.YYY').replace(".22", ".")}
                    </Box>
                    <Box marginTop="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    </Box>
                    <Box>
                        {item && item.title}
                    </Box>
                    <Box>
                        {item && item.price}
                    </Box>
                </Box>
            </Link>
            <Button colorScheme={findBasketItem ? 'pink' : 'blue'} onClick={() => addToBasket(item, findBasketItem)}>
                {
                    findBasketItem ? 'Remove cart' : 'Add Cart'
                }
            </Button>

        </Box>
    )
}

export default Card