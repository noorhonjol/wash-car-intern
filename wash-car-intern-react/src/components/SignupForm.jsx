import InputField from "../components/InputField";
import { Formik, Form } from "formik";
import SignUpSchema from "../schema/SignUpSchema.js";
import { Link } from "react-router-dom";
import { messages,backendUrls} from "../ults/constants";

import { submitForm} from "../ults/helpers";

const handleSignUpform = async (values, action) => {
  try {
    const responseMessage = await submitForm(values, backendUrls.signUp);

    if (responseMessage === messages.successful) {
      window.location = "/";
    } else {
      action.setStatus(responseMessage);
    }
  } catch (error) {
    action.setStatus(messages.unexpectedError);
    action.setSubmitting(false);
  }
};

const inputAttributes = [
  {
    name: "firstname",
    type: "text",
    label: "First Name",
    placeholder: "Enter Your First Name",
  },
  {
    name: "lastname",
    type: "text",
    label: "Last Name",
    placeholder: "Enter Your Last Name",
  },
  {
    name: "phonenumber",
    type: "text",
    label: "Phone Number",
    placeholder: "Enter Your Phone Number",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Your Password",
  },
];
const SignupForm = () => {
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h3 className=" text-center  text-base leading-tight tracking-tight text-gray-900 md:text-2xl">
        Sign up
      </h3>
      <Formik
        validationSchema={SignUpSchema}
        initialValues={{
          firstname: "",
          lastname: "",
          password: "",
          phonenumber: "",
        }}
        onSubmit={handleSignUpform}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4 md:space-y-6">
            {inputAttributes.map((at, index) => (
              <InputField
                key={index}
                label={at.label}
                name={at.name}
                type={at.type}
                placeholder={at.placeholder}
              />
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-white bg-bblue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Have an account ?{" "}
              <Link
                to="/login"
                className="font-medium text-primary-600 hover:underline">
                Log In
              </Link>
            </p>
            {status === messages.invalidCredentials && (
              <div className="error">{messages.invalidCredentials}</div>
            )}
            {status === messages.unexpectedError && (
              <div className="error">{messages.unexpectedError}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
