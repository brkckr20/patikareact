import { useState } from 'react'

const InputExample = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [form, setForm] = useState({ name: "", surname: "" })

    const changeName = (e) => { //isimde değişiklik yapılması sırasında çalışacak fonksiyon
        setName(e.target.value)
    }
    const changeSurname = (e) => { //soyisimde değişiklik yapılması sırasında çalışacak fonksiyon
        setSurname(e.target.value)
    }

    //her input için tek tek state tanımı yapmaktansa tüm inputlar için tek bir function tanımlanması işlemi
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        /*
            inputlara name değerleri verilerek bunların karşılıkarı e.target.name ile yakalandı
            obje olarak verilen ilk değerin key'leri inputlardaki name'lere eşitlendi
            value değerleri ise change olduğu esnana da yakalandı
            formun ilk değerlerinin korunması amacıyla ... operatörü kullanıldı.
        */
    }

    return (
        <div>
            <span>isim giriniz : </span>
            <input
                type="text"
                value={form.name}
                name="name"
                onChange={onChangeInput} //inputta değişiklik yapıldığında set edilmesi için tanımlanan fonksiyon çağrılması
            />
            <br />
            <span>soyisim giriniz : </span>
            <input
                type="text"
                name="surname"
                value={form.surname}
                onChange={onChangeInput} //inputta değişiklik yapıldığında set edilmesi için tanımlanan fonksiyon çağrılması
            />
            <br />
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample