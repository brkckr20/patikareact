import React from 'react'
import { useFormik } from 'formik'
function UseFormikKullanimi() {
    const {handleSubmit,values,handleChange} = useFormik({
        initialValues: {
            firstName: 'Burak',
            lastName: 'Çakır',
            email: 'burak@mail.com',
            gender: 'male',
            hobbies: [],
            country: "england"
        },
        onSubmit: values => {
            console.log("UseFormik Submit Edildi...", values);
        },
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" onChange={handleChange} placeholder="Jane" value={values.firstName} />
                <br />
                <br />
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" onChange={handleChange} placeholder="Doe" value={values.lastName} />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                />
                <br />
                <br />

                <span>Male</span>
                <input name="gender" type="radio" value="male" onChange={handleChange} placeholder="Doe" checked={values.gender === 'male'} />
                <span>Female</span>
                <input name="gender" type="radio" value="female" onChange={handleChange} placeholder="Doe" checked={values.gender === 'female'} />

                <br />
                <br />

                <div>
                    <input type="checkbox" name='hobbies' value="football" onChange={handleChange} />
                    Football
                </div>
                <div>
                    <input type="checkbox" name='hobbies' value="cinema" onChange={handleChange} />
                    Cinema
                </div>
                <div>
                    <input type="checkbox" name='hobbies' value='photography' onChange={handleChange} />
                    Photography
                </div>

                <br />
                <br />

                <select name='country' value={values.country} onChange={handleChange}>
                    <option value="turkey">Türkiye</option>
                    <option value="england">Ingiltere</option>
                    <option value="usa">Amerika</option>
                </select>

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

export default UseFormikKullanimi