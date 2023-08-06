import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import HomePage from "./pages/HomePage.jsx";
import Tracker from "./pages/Tracker.jsx";
import Profile from "./pages/Profile.jsx";
import RootLayout from "./layauts/RootLayout.jsx";
import MapContainer from "./pages/Map.jsx";
import AddServies from "./pages/AddServies.jsx";
import Servies from "./pages/Servies.jsx";
import ListVehicles from "./pages/ListVehicles.jsx";
import ListServies from "./pages/ListServies.jsx";
import ChooseVehicle from "./pages/ChooseVehicle.jsx";
import AdminLayout from "./layauts/AdminLayout.jsx";
import AddVehcile from "./pages/AddVehicle.jsx";
import Logout from "./components/logout.js";
import ConfirmReservation from "./pages/ConfirmReservation.jsx"
import { FetchData, authInfo, loaderForServicesPage, loaderForConfirmPage, confirmReservationAction, updateData,update, PostData } from "./ults/helpers.js";
import Reservations from "./pages/Reservations.jsx";
import ReservationDetails from "./pages/ReservationDetails.jsx";
import EditServices from "./pages/EditServices.jsx";
import HomeDashborad from "./pages/HomeDashborad.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} id='root' loader={authInfo}>

      <Route path="reservation" element={<div><Outlet /></div>}>

        <Route path="map" element={<MapContainer />} />
        <Route path="choosevehicle" element={<ChooseVehicle />} id="selectvehicle" loader={async () => await FetchData("vehicles")} />
        <Route path="services" element={<Servies />} id="selectservices" loader={loaderForServicesPage} />
        <Route path="confirm" element={<ConfirmReservation />} id="confirmreservation" loader={loaderForConfirmPage} action={confirmReservationAction} />
      </Route>

      <Route index element={<HomePage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="tracker" id="customerReservation" loader={async () => FetchData("customer/reservations")} element={<Tracker />} />
      <Route path="profile" element={<Profile />} />

      <Route path="dashboard" element={<AdminLayout />}>
        <Route path="listservices"  element={<ListServies />} id="services" loader={async () => await FetchData("services")} />
        <Route path="listvehicles" element={<ListVehicles />} id="vehicles" loader={async () => await FetchData("vehicles")} />
        <Route path="addvehicle" element={<AddVehcile />} />
        <Route path="addservice" element={<AddServies />} />
        <Route index element={<HomeDashborad />} 
        id="homedashboard"
        loader={async () => FetchData("admin/home")}
        />
        <Route path="editservice/:id" element={<EditServices />}
          loader={async ({ params }) => FetchData(`service/${params.id}`)}
          id="editservice"
          action={async ({ request, params }) => {
            let newData = await request.formData();
            const response=await PostData(`service/${params.id}/edit`,newData);
            return 1;
          }}
        />
      </Route>
      <Route path="reservations" id="orders" element={<Reservations />} loader={async () => await FetchData("worker/reservations")} />
      <Route path="reservation/:id" id="details" element={<ReservationDetails />}
        loader={async ({ params }) => FetchData(`reservation/${params.id}`)}
        action={async ({ request, params }) => {
          let newData = await request.formData();
          const response = await updateData(`reservation/${params.id}`, { newstatus: newStatus }, 'patch');
          console.log(response);

          return response;
        }} />

      <Route path='/logout' action={Logout} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
