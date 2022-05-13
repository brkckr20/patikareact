import { useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }
const Form = ({ contacts, setContacts }) => {

    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //form boş ise göndermeme kontrolü
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }

        setContacts([...contacts, form])

        //form submit işleminden sonra formun temizlenmesi
        setForm(initialFormValues)
        /* console.log(form) */
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    name='fullname'
                    value={form.fullname}
                    placeholder='fullname'
                    onChange={onChangeInput}
                    className="form-control"
                />
            </div>
            <div>
                <input
                    type="text"
                    name='phone_number'
                    value={form.phone_number}
                    placeholder='phone number'
                    onChange={onChangeInput}
                    className="form-control mt-1"
                />
            </div>
            <button className='btn btn-dark mt-1 btn-sm w-100'>Kaydet +</button>
        </form>
    )
}

export default Form