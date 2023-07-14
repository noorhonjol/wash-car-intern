import { Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import HomePage from './pages/HomePage.jsx'
import Tracker from './pages/Tracker.jsx';
import Profile from './pages/Profile.jsx';
import RootLayout from './layauts/RootLayout.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    
  <Route path="/" element={<RootLayout/>} >
      <Route index element={<HomePage/>} />
      <Route path="login" element={<LogIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="tracker" element={<Tracker/>}/>
      <Route path="profile" element={<Profile/>}/>
  </Route>
  )

)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
