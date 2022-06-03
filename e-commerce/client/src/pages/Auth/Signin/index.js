import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from '@chakra-ui/react';
import { useFormik } from 'formik'
import validationSchema from './validations';
import { fetchLogin } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext'

const Signin = ({ history }) => {

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({ email: values.email, password: values.password })
        login(loginResponse)
        history.push("/profile")
        console.log("signin.js 23.satır", loginResponse)
      } catch (error) {
        console.log("ERROR register", error)
        bag.setErrors({ general: error.response.data.message })
      }

    }
  })
  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign In</Heading>
          </Box>
          <Box my={5}>
            {
              formik.errors.general && (
                <Alert status='error'>
                  {formik.errors.general}
                </Alert>
              )
            }
          </Box>
          <Box m={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <Button mt="4" type="submit" width="full" colorScheme="messenger">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin