import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../api';
import { Box, Text, Button } from '@chakra-ui/react';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';

const ProductDetail = () => {
    const { product_id } = useParams();

    const { isError, isLoading, data } = useQuery(["product", product_id], () => fetchProduct(product_id))

    if (isLoading) {
        return <div>Ürün yükleniyor...</div>
    }
    if (isError) {
        return <div>Ürün yüklenirken hata oluştu</div>
    }
    const images = data.photos.map((url) =>({original : url}))


    return (
        <div>
            <Button colorScheme="pink">Add to cart</Button>
            <Text as="h2" fontSize="2xl">{data.title}</Text>
            <Text as="h2" fontSize="2xl">{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
            <p>{data.description}</p>

            <Box margin="10">
                <ImageGallery items={images}/>
            </Box>

        </div>
    )
}

export default ProductDetail