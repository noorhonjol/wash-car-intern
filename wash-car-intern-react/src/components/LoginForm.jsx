import InputField from "../components/InputField";
import { Form, Formik } from "formik";
import LoginSchema from "../schema/LoginSchema";
import { Link } from "react-router-dom";
import { submitForm } from "../ults/api";
import { messages, backendUrls } from "../ults/constants";
const inputAttributes = [
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
const handleLogInform = async (values, action) => {
  try {
    const responseMessage = await submitForm(values, backendUrls.loginEndPoint);
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

const LoginForm = () => {
  return (
    <>
      <h3 className=" text-base leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Log in to your account
      </h3>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          phonenumber: "",
          password: "",
        }}
        onSubmit={handleLogInform}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4 md:space-y-6">
            {inputAttributes.map((attribute, index) => (
              <InputField
                key={index}
                placeholde={attribute.placeholder}
                label={attribute.label}
                name={attribute.name}
                type={attribute.type}
              />
            ))}

            <button
              type="submit"
              className="w-full text-white bg-bblue hover:bg-basic-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5"
              disabled={isSubmitting}
            >
              Log in
            </button>
            <p className="text-sm font-light text-gray-500 ">
              Don’t have an account yet?
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline "
              >
                Sign up
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
    </>
  );
};

export default LoginForm;
