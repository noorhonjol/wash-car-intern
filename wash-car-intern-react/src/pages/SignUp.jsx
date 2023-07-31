import SignupForm from "../components/SignupForm";
import { Navigate, useRouteLoaderData } from "react-router-dom";
const SignUp = () => {
  const { token } = useRouteLoaderData("root");
  return (
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-basic">
        <img className="w-64 h-45 mb-4 " src="logo.png" alt="logo" />
        <div className="w-full bg-white rounded-3xl shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {token?<Navigate to="/"/>:<SignupForm/>}
        </div>
      </div>
  );
};

export default SignUp;
