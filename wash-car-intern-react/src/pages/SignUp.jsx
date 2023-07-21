/* eslint-disable no-unused-vars */
import InputField from "../components/InputField";
import { Formik,Form } from "formik";
import SignUpSchema from '../schema/SignUpSchema.js'
const inputAttributes = [
  {
    name: "firstname",
    type: "text",
    label: "First Name",
    placeholder:'Enter Your First Name'
  },
  {
    name: "lastname",
    type: "text",
    label: "Last Name",
    placeholder:'Enter Your Last Name'
  },
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder:'Enter Your Email'
  },
  {
    name: "phonenumber",
    type: "text",
    label: "Phone Number",
    placeholder:'Enter Your Phone Number'
  },  
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder:'Enter Your Password'
  },
];
const SignUp = () => {
  return (
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-basic">
        <a
          href="#"
          className="  text-2xl font-semibold text-gray-900 dark:text-white"
        ></a>
        <div className="w-full bg-white rounded-3xl shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className=" text-center  text-base leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up
            </h3>
            <Formik
              validationSchema={SignUpSchema}
              initialValues={{
                email:'',
                password:'',
                firstname:'',
                lastname:'',
                phonenumber:''
              }}
              
              >
              {(props) => (
                <Form className="space-y-4 md:space-y-6">
                  {inputAttributes.map((at,index)=><InputField key={index} label={at.label} name={at.name} type={at.type} placeholder={at.placeholder}/>)}
                  <button type="submit"className="w-full text-white bg-bblue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Have an account ?{" "}
                    <a href="#" className="font-medium text-primary-600 hover:underline">Log In</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
  );
};

export default SignUp;
