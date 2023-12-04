import { Form, useLoaderData } from "react-router-dom";
const shipping=4.99;

const ConfirmReservation = () => {
    const {vehicle,service}=useLoaderData("confirmreservation");
    
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Your order</h1>
      <div className="px-6 xl:px-0">
        <div className="rounded-lg ">
          <div className="justify-between mb-6 items-center rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={`/${service.image_url}`}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  {service.service_name}
                </h2>
                <p className="mt-1 text-xs text-gray-700">vehicle type :{vehicle.vehicle_type}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${service.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">${shipping}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${shipping+parseFloat(service.price)} USD</p>
            </div>
          </div>
          <Form method="post">

            <button type="submit" className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Confirm
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ConfirmReservation;
