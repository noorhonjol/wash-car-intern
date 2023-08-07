import { useRouteLoaderData } from "react-router-dom";
import Steps from "./ChangeStatus";

const Tracker = () => {
  const { data: reservation } = useRouteLoaderData("customerReservation");
  console.log();
  const { rule } = useRouteLoaderData("root");

  return (
    <div className="flex w-4/5 mx-auto h-screen items-center gap-10 text-gray-500">
      {reservation.length ? (
        <div className="w-full text-xl border border-solid rounded p-12">
          <div className="mb-10 border border-solid rounded-lg p-4 flex gap-10 items-center">
            <div className="w-1/4">
              <img src={`/${reservation[0].vehicle.image_url}`} alt="" />
            </div>
            <div className="flex flex-col gap-4 w-1/4">
              <p className="text-gray-600 text-3xl">{reservation[0].vehicle.vehicle_type}</p>
              <p className="">{reservation[0].service.service_name} washing</p>
              <p className="">{reservation[0].service.price} $</p>

            </div>
            {reservation[0].worker_id ? (
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl">worker info</h2>
                <p >
                  {" "}
                  name :{" "}
                  {`${reservation[0].worker.first_name} ${reservation[0].worker.last_name}`}
                </p>

                <p>worker number : {reservation[0].worker.phone_number} </p>
              </div>
            ) : (
              <div>
                <p>no one accept it yet</p>
              </div>
            )}
          </div>

          <p className="mb-10">you order status is {reservation[0].status}</p>
          
          <Steps actualStatus={reservation[0].status} rule={rule} />
        </div>
      ) : (
        <div className="text-gray-500 text-5xl flex justify-center items-center w-5/6"><p>you dont have any request go make one</p></div>
      )}
    </div>
  );
};

export default Tracker;
