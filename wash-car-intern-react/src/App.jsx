import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import HomePage from './pages/HomePage.jsx'
import Tracker from './pages/Tracker.jsx';
import Profile from './pages/Profile.jsx';
import RootLayout from './layauts/RootLayout.jsx';
import MapContainer from './pages/Map.jsx'
import AddServies from './pages/AddServies.jsx';
import Servies from './pages/Servies.jsx';
import ListVehicles from './pages/ListVehicles.jsx';
import ListServies from './pages/ListServies.jsx';
import ChooseVehicle from './pages/ChooseVehicle.jsx';
import AdminLayout from './layauts/AdminLayout.jsx';
import AddVehcile from './pages/AddVehicle.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    
  <Route path="/" element={<RootLayout/>} >
      <Route path='map' element={<MapContainer/>} /> 
      <Route index element={<HomePage/>} />
      <Route path="login" element={<LogIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="tracker" element={<Tracker/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="addservies" element={<AddServies/>}/>
      <Route path="servies" element={<Servies/>}/>
      <Route path="choosevehicle" element={<ChooseVehicle/>}/>
      <Route path="listservies" element={<ListServies/>}/>
      <Route path="listvehicles" element={<ListVehicles/>}/>
      <Route path="addvehicle" element={<AddVehcile/>}/>

  </Route>
  )

)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
