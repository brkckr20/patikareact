import React from 'react'
import { postProduct } from '../../../api';
import { useMutation, useQueryClient } from 'react-query';
import { FieldArray, Formik } from "formik";
import { Box, FormControl, FormLabel, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { message } from "antd"
import validationSchema from './validations'

const NewProduct = () => {
    const queryClient = useQueryClient();

    const newProductMutation = useMutation(
        postProduct,
        { onSuccess: () => queryClient.invalidateQueries() }
    );

    const handleSubmit = async (values, bag) => {
        console.log(values);
        message.loading({ content: "Loading...", key: "product_save" })

        //values.photos = JSON.stringify(values.photos);

        const newValues = {
            ...values,
            photos: JSON.stringify(values.photos)
        }

        newProductMutation.mutate(newValues, {
            onSuccess: () => {
                console.log("Success")
                message.success({
                    content: "Ürün ekleme işlemi başarılı.",
                    key: "product_save",
                    duration: 2
                })
            }
        })
    }

    return (
        <div>
            <Text fontSize="2xl">New Product</Text>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    price: "",
                    photos: []
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
                                        <Button mt={4} width="full" type='submit' isLoading={isSubmitting}>Save</Button>
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

export default NewProduct