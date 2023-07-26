import * as yup from "yup"

const LoginSchema=yup.object().shape({
    phonenumber:yup.string().trim().required("this field is required"),
    password:yup.string().required("this field is required").min(7).max(255)

})

export default LoginSchema;