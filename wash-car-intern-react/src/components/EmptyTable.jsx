import { Link } from "react-router-dom";

const EmptyTable=({link})=>{

    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <p className="text-2xl text-gray-500 mb-8">no exisiting data right now</p>
            <Link className="bg-bblue py-4 px-12 rounded text-white text" to={`/dashboard/${link}`} >click to add</Link>
        </div>
    )
}
export default EmptyTable;