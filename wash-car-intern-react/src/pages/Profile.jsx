const Profile = () => {
  return (
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-basic">
        <div className="w-full bg-white rounded-3xl shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="flex flex-wrab gap-7">
            <img
              className="w-24 h-24 rounded-full m-5"
              src="profile.jpg"
              alt="profile"
            />
            <h1 className=" font-bold"> Fisrt , Last </h1>
            

          </div>
        </div>
      </div>
  );
};

export default Profile;
