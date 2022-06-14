import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchProduct, updateProduct } from '../../../api';
import { useQuery } from 'react-query';
import { FieldArray, Formik } from "formik";
import { Box, FormControl, FormLabel, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { message } from "antd"
import validationSchema from './validations'

const ProductDetail = () => {

    const { product_id } = useParams();

    const { isLoading, isError, data, error } = useQuery(["admin:product", product_id], () => fetchProduct(product_id));

    if (isLoading) {
        return <div>Loading...</div>
    }


    if (isError) {
        return <div>Error : {error.message}</div>
    }

    const handleSubmit = async (values, bag) => {
        message.loading({ content: "Loading...", key: "product_update" })
        try {
            await updateProduct(values, product_id);
            message.success({ content: "Ürün güncelleme işlemi başarılı!", key: "product_update", duration : 2 })
        } catch (error) {
            message.error("Ürün güncellenemedi!")
        }
    }

    return (
        <div>
            <Text fontSize="2xl">Edit</Text>
            <Formik
                initialValues={{
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    photos: data.photos
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit, errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
                        <>
                            <Box>
                                <Box my="5" textAlign="left">
                                    <form onSubmit={handleSubmit}>
                                        <FormControl>
                                            <FormLabel>Title</FormLabel>
                                            <Input
                                                name='title'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.title}
                                                disabled={isSubmitting}
                                                isInvalid={touched.title && errors.title}
                                            ></Input>
                                            {touched.title && errors.title && <Text color="red.400">{errors.title}</Text>}
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Description</FormLabel>
                                            <Textarea name='description' onChange={handleChange} onBlur={handleBlur} value={values.description} disabled={isSubmitting}></Textarea>
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Price</FormLabel>
                                            <Input name='price' onChange={handleChange} onBlur={handleBlur} value={values.price} disabled={isSubmitting}></Input>
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>Photos</FormLabel>
                                            <FieldArray name='photos' render={(arrayHelper) => (

                                                <div>
                                                    {
                                                        values.photos && values.photos.map((photo, index) => (
                                                            <div style={{ display: "flex", marginBottom: "4px" }} key={index}>
                                                                <Input name={`photos.${index}`} value={photo} disabled={isSubmitting} onChange={handleChange}></Input>
                                                                <Button ml={4} type="button" colorScheme="red" onClick={() => arrayHelper.remove(index)}>Remove</Button>
                                                            </div>
                                                        ))
                                                    }
                                                    <Button mt={5} onClick={() => arrayHelper.push("")}>
                                                        Add a photo
                                                    </Button>
                                                </div>

                                            )} />
                                        </FormControl>
                                        <Button mt={4} width="full" type='submit' isLoading={isSubmitting}>Update</Button>
                                    </form>
                                </Box>
                            </Box>
                        </>
                    )
                }

            </Formik>
        </div>
    )
}

export default ProductDetail