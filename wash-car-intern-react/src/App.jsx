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
import { FetchData} from "./ults/api.js";
import Reservations from "./pages/Reservations.jsx";
import ReservationDetails from "./pages/ReservationDetails.jsx";
import EditServices from "./pages/EditServices.jsx";
import HomeDashborad from "./pages/HomeDashborad.jsx";
import {authInfo,confirmReservationAction,loaderForServicesPage,loaderForConfirmPage, updateServiceAction, updateStatusAction, editServiceLoader, deleteVehicleLoader,deleteServiceLoader,updateVehicleAction}from './ults/routerUtils.js'
import ChangeStatus from "./pages/ChangeStatus.jsx";
import EditVehicle from "./pages/EditVehicle.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} id='root' loader={authInfo}>

      <Route index element={<HomePage />} />

      <Route path="reservation" element={<div><Outlet /></div>}>
        <Route path="map" element={<MapContainer />} />
        <Route path="choosevehicle" element={<ChooseVehicle />} id="selectvehicle" loader={async () => await FetchData("vehicles")} />
        <Route path="services" element={<Servies />} id="selectservices" loader={loaderForServicesPage} />
        <Route path="confirm" element={<ConfirmReservation />} id="confirmreservation" loader={loaderForConfirmPage} action={confirmReservationAction} />
      </Route>

      <Route path="login" element={<LogIn />}/>
      <Route path="signup" element={<SignUp />}/>
      <Route path="tracker"element={<Tracker />} id="customerReservation" loader={async () => FetchData("customer/reservations")}  />
      <Route path="profile" element={<Profile />} />
    
      <Route path="dashboard" element={<AdminLayout />}>
        <Route index element={<HomeDashborad />} id="homedashboard"loader={async () => FetchData("admin/home")}/>
        <Route path="listservices"  element={<ListServies />} id="services" loader={async () => await FetchData("services")} />
        <Route path="listvehicles" element={<ListVehicles />} id="vehicles" loader={async () => await FetchData("vehicles")} />
        <Route path="addvehicle" element={<AddVehcile />} />
        <Route path="addservice" element={<AddServies />} />
        <Route path="editservice/:id" element={<EditServices />} loader={editServiceLoader}id="editservice"action={updateServiceAction}/>
        <Route path="editvehicle/:id" element={<EditVehicle />} loader={async ({params}) => FetchData(`vehicle/${params.id}`)} id="editvehicle" action={updateVehicleAction} /> 
        <Route path='deleteservice/:id' loader={deleteServiceLoader} />
        <Route path='deletevehicle/:id' loader={deleteVehicleLoader} />

      </Route>

      <Route path="reservations"element={<Reservations />} id="orders"  loader={async () => await FetchData("worker/reservations")} />
      <Route path="reservation/:id" id="details" element={<ReservationDetails />} loader={async ({ params }) => FetchData(`reservation/${params.id}`)}>
        <Route path="changestatus" element={<ChangeStatus/>}action={updateStatusAction}/>
      </Route>

    <Route path='/logout' action={Logout} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
