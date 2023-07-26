import * as yup from "yup"

const SignUpSchema=yup.object().shape({
    password:yup.string().required("this field is required").min(7).max(255),
    firstname:yup.string().required("this filed is required").min(2).max(20),
    lastname:yup.string().required("this filed is required").min(2).max(20),
    phonenumber:yup.string().required("this filed is required").min(2).max(20)
})

export default SignUpSchema;