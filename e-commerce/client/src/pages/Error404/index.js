import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

const Error404 = () => {
    return (
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Hata!!!</AlertTitle>
            <AlertDescription>Aradığınız sayfa bulunamadı veya mevcut değil!</AlertDescription>
        </Alert>
    )
}

export default Error404