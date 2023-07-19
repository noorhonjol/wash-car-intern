/* eslint-disable no-unused-vars */
import InputField from '../components/InputField'
import { Form, Formik, } from 'formik';
import LoginSchema from '../schema/LoginSchema';
// const onSubmit= (values, actions) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);
//   }, 1000);
// }
const inputAttributes=[
  { 
    name:"email",
    type:"text" ,
    label:"email",
    placeholde:"enter your email"
  },
  { 
    name:"password" ,
    type:"password",
    label:"Password",
    placeholde:"enter your password"
  }
]

const LogIn = () => {
  return (
    <section className="bg-basic">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className=" flex items-center text-2xl font-semibold text-gray-900 ">
          <img className="w-64 h-45 mb-4 " src="logo.png" alt="logo"/>     
        </a>
        <div className="w-full bg-white rounded-3xl shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className=" text-base leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Log in to your account
            </h3>
            <Formik
              validationSchema={LoginSchema}
              initialValues={{
                email:'',
                password:'',
              }}
              
              >
              {(props) => (
                <Form className="space-y-4 md:space-y-6">
                  {inputAttributes.map((at,index)=><InputField key={index} placeholde={at.placeholder} label={at.label} name={at.name} type={at.type}/>)}
                  <button type="submit" className="w-full text-white bg-bblue hover:bg-basic-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">Log in</button>
                  <p className="text-sm font-light text-gray-500 ">
                    Don’t have an account yet?
                    <a href="#" className="font-medium text-primary-600 hover:underline ">Sign up</a>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
      </div>
    </div>
  </section>
  )
}

export default LogIn