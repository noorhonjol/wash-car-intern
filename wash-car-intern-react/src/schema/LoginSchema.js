import * as yup from "yup"

const LoginSchema=yup.object().shape({
    email:yup.string().email("enter a valid email").trim().required("this field is required"),
    password:yup.string().required("this field is required").min(7).max(255)

})

export default LoginSchema;