import { Navigate, useRouteLoaderData } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LogIn = () => {
  const { token } = useRouteLoaderData("root");

  return (
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-basic">
      <img className="w-64 h-45 mb-4 " src="logo.png" alt="logo" />
      <div className="w-full bg-white rounded-3xl shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          {token ? <Navigate to="/" /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default LogIn;