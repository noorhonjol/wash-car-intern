import InputField from "../components/InputField"
const inputAttributes=[
    {"id":"firstname" , "name":"firatname" ," Placeholder":"Enter your Fisrt Name " , "type":"text" ,"LabelText":"First Name"},
    {"id":"lastname" , "name":"lastname" ," Placeholder":"Enter your Last Name " , "type":"text" ,"LabelText":"Last Name"},
    {"id":"phonenumber" , "name":"phonenumber" ," Placeholder":"Enter your Phone Number" , "type":"text" ,"LabelText":"Phone Number"},
    {"id":"password" , "name":"password" ," Placeholder":"Enter your Password" , "type":"password","LabelText":"Password"},

]
const SignUp = () => {
  return (
    
    <section className="bg-basic dark:bg-gray-900">
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="  text-2xl font-semibold text-gray-900 dark:text-white">
       </a>
    <div className="w-full bg-white rounded-3xl shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
   
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h3 className=" text-center text-gray-400 text-base leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign up 
                </h3>
                <form className="space-y-4 md:space-y-6 " action="#">
                {   
                      inputAttributes.map((attribute)=>
                        {
                          return <InputField id={attribute.id} name = {attribute.name} placeholder={attribute.Placeholder} labelText={attribute.LabelText} />
                        })
                    }
                    
                    <button type="submit" className="w-full text-white bg-bblue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Have an account ? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log In</a>
                    </p>
                </form>
                
            </div>
    </div>
    </div>
  </section>
  
  )
}

export default SignUp