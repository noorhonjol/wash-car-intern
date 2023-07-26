import { Link } from "react-router-dom"




const IsLogin=()=>{

return (
    <div className="flex flex-col items-center h-48 justify-around">
        <p className="text-center text-xl text-gray-600">you are login now</p>
        <Link to="/" 
            className=" text-white bg-bblue hover:bg-basic-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-8 py-4" >
            back to home</Link>
    </div>
)
}

export default IsLogin;