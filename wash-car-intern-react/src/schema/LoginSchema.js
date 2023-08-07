import * as yup from "yup"

const LoginSchema=yup.object().shape({
    phonenumber:yup.string().required("this filed is required").trim()
    .test('phone number validitaion', 'Invalid phone number', value => {
        const phoneRegex = /^(059|056|\+97059|\+97056)\d{7}$/;
        return phoneRegex.test(value);
      }),
    password:yup.string().required("this field is required").min(7).max(20)

})

export default LoginSchema;