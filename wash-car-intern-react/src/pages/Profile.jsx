// import InputField from "../components/InputField"
// const inputAttributes=[
//     {"id":"firstname" , "name":"firatname" ," Placeholder":"Enter your Fisrt Name " , "type":"text" ,"LabelText":"First Name"},
//     {"id":"lastname" , "name":"lastname" ," Placeholder":"Enter your Last Name " , "type":"text" ,"LabelText":"Last Name"},
//     {"id":"phonenumber" , "name":"phonenumber" ," Placeholder":"Enter your Phone Number" , "type":"text" ,"LabelText":"Phone Number"},
//     {"id":"password" , "name":"password" ," Placeholder":"Enter your Password" , "type":"password","LabelText":"Password"},
// ]
const Profile = () => {
  return (
    <section className="bg-basic dark:bg-gray-900">
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-3xl shadow  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrab gap-7">
      <img className="w-40 h-30 rounded-full"src="profile.jpg" alt="profile"/> 
      <h1 className=""> Fisrt , Last </h1>    
      </div>

        </div>

      </div>
    </section>

   
    
    
  )
}

export default Profile