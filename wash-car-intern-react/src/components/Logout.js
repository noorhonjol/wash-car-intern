
import { redirect} from 'react-router-dom'
import { backendUrls } from '../ults/constants';

const Logout=async()=>{
    try{
        const token=localStorage.getItem("usertoken");

        const response = await fetch(`${backendUrls.apiUrl}/${backendUrls.logout}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/vnd.api+json",
              Accept: "application/vnd.api+json",
              Authorization:`Bearer ${token}`  
            },
          });
        if(!response.ok){
            //add error page
        }
        localStorage.removeItem("usertoken");
        localStorage.removeItem("rule");
        return redirect('/')
    }catch(err){
        //add error page 
        
    }
}

export default Logout;