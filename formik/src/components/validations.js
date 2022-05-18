import * as yup from 'yup';

const validations = yup.object().shape({
    email : yup.string().email("Geçerli bir mail adresi giriniz!").required("Zorunlu alan"),
    password : yup.string().min(5, "Parola en az 5 karakter olmalıdır!").required("Zorunlu alan"),
    passwordConfirm : yup.string().oneOf([yup.ref("password")],"Parolalar eşleşmiyor.").required("Zorunlu alan") //password fieldı ile karşılaştırıp aynı olup olmadığının kontrolü 
})

export default validations