import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir mail adresi giriniz!").required("Boş Bırakılamaz"),
    password: yup.string().min(5, "Parola en az karakter olmalıdır.").required("Boş Bırakılamaz"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolalar eşleşmiyor.").required("Boş Bırakılamaz")
})

export default validations;