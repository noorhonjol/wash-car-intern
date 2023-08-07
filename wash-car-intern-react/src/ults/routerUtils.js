import { PostData, FetchData, patchData, DeleteData } from "./api.js";
import { redirect } from "react-router-dom";
const authInfo = () => {
  return {
    rule: localStorage.getItem("rule"),
    token: localStorage.getItem("usertoken"),
  };
};
const confirmReservationAction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const searchTerm = url.searchParams;
    const serviceid = searchTerm.get("serviceid");
    const lat = searchTerm.get("lat");
    const lng = searchTerm.get("lng");

    const reservationData = { serviceid, lat, lng };
    await PostData("reservation", reservationData);
    return redirect("/");
  } catch (err) {
    return err;
  }
};
const loaderForServicesPage = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams;
  const vehicleId = searchTerm.get("vehicleid");

  return await FetchData(`vehicle/${vehicleId}/services`);
};
const loaderForConfirmPage = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams;
  const vehicleId = searchTerm.get("vehicleid");
  const serviceId = searchTerm.get("serviceid");

  const { data: vehicle } = await FetchData(`vehicle/${vehicleId}`);
  console.log(vehicle);
  const { data: service } = await FetchData(`service/${serviceId}`);

  return { service: service, vehicle: vehicle };
};
const updateServiceAction=async ({ request, params }) => {
  let newData = await request.formData();
  const response=await PostData(`service/${params.id}/edit`,newData);
  return response;
}
const updateStatusAction=async ({ request, params }) => {
  let newData = await request.formData();
  const newStatus=newData.get("newstatus");
  console.log(newStatus)
  const response = await patchData(`reservation/${params.id}`, { newstatus: newStatus });
  console.log(response)
  return 1;
};
const editServiceLoader=async ({ params }) => {
  const {data:serviceData}=await FetchData(`service/${params.id}`)
  const {data:availableVehicles}=await FetchData("vehicles");
  return {availableVehicles,serviceData}
}

const deleteServiceLoader=async({params})=>{
  
  const res=await DeleteData(`service/${params.id}/delete`);
  
  if(res===204)return redirect('/dashboard/listservices');
  return 1;
}

const deleteVehicleLoader=async({params})=>{
  
  const res=await DeleteData(`vehicle/${params.id}/delete`);

  if(res===204)return redirect('/dashboard/listvehicles');
  return 1;
}
export {
  deleteVehicleLoader,
  editServiceLoader,
  deleteServiceLoader,
  authInfo,
  confirmReservationAction,
  loaderForServicesPage,
  loaderForConfirmPage,
  updateServiceAction,
  updateStatusAction
};
