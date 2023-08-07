import * as yup from "yup"

const SignUpSchema=yup.object().shape({
    password:yup.string().required("this field is required").min(7).max(255),
    firstname:yup.string().required("this filed is required").min(2).max(25),
    lastname:yup.string().required("this filed is required").min(2).max(25),
    phonenumber:yup.string().required("this filed is required")
    .test('phone number validitaion', 'Invalid email format', value => {
        const phoneRegex = /^(059|056|\+97059|\+97056)\d{7}$/;
        return phoneRegex.test(value);
      }),
})

export default SignUpSchema;