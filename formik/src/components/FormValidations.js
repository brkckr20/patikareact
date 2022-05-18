import React from 'react'
import { useFormik } from 'formik'
import validationSchema from './validations';

function FormValidations() {
    const { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: "",
            passwordConfirm: "",

        },
        onSubmit: values => {
            console.log("Form validations submit edildi...", values);
        },
        validationSchema,
    });
    console.log(errors);
    return (
        <div className='App'>
            <h2>Form Validationss</h2>
            <form onSubmit={handleSubmit}>


                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                {
                    errors.email && touched.email && <div style={{ color: "red" }}>{errors.email}</div>
                }
                <br />
                <br />
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                />
                {
                    errors.password && touched.password && <div style={{ color: "red" }}>{errors.password}</div>
                }
                <br />
                <br />
                <label>Password Confirm</label>
                <input
                    name="passwordConfirm"
                    type="password"
                    onChange={handleChange}
                    value={values.passwordConfirm}
                    onBlur={handleBlur}
                />
                {
                    errors.passwordConfirm && touched.passwordConfirm && <div style={{ color: "red" }}>{errors.passwordConfirm}</div>
                }

                <br />
                <br />
                <button type="submit">Submit</button>

                <br />
                <br />
                {
                    JSON.stringify(values)
                }
            </form>
        </div>
    )
}

export default FormValidations