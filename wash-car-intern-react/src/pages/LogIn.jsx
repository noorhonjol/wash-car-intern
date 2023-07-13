import React from 'react'
import InputField from '../components/InputField'
// function anything (e)
// {
//  e.preventDefault()

// console.log(e);
// }
const inputAttributes=[
    {"id":"username" , "name":"username" ,"placeholder":"Enter your username" , "type":"text" ,"LabelText":"username"},
    {"id":"password" , "name":"password" ,"placeholder":"Enter your Password" , "type":"password","LabelText":"Password"},
]
const LogIn = () => {
  return (
    <section className="bg-basic dark:bg-gray-900">
    <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className=" flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-64 h-45 mb-4 " src="logo.png" alt="logo"/>     
        </a>
    <div className="w-full bg-white rounded-3xl shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h3 className=" text-base leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Log in to your account
                </h3>
                <form className="space-y-4 md:space-y-6 " action="#">  
                    {   
                      inputAttributes.map((attribute)=>
                        {
                          return <InputField id={attribute.id} name = {attribute.name} placeholder={attribute.placeholder} labelText={attribute.LabelText} />
                        })
                    }
                    <button type="submit" className="w-full text-white bg-bblue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default LogIn