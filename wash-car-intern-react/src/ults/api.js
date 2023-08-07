import axios from "axios";
import { errorCodes, messages, backendUrls } from "./constants";
import { authInfo } from "./routerUtils";

const patchData=async(endPoint,newData)=>{
  try{
    const {token}=authInfo();
    console.log(endPoint,newData)
    const response=await axios.patch(`${backendUrls.apiUrl}/${endPoint}`,newData,
    {
      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`,
    }});
    return response.data;
  }catch(err){
    return err;
  }
}

const PostData=async(endPoint,data)=>{
  try {
    const {token}=authInfo();
console.log(data)
    const response = await axios.post(`${backendUrls.apiUrl}/${endPoint}`,data,{

      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`,
    }
    });
    return { data: response.data };

  } catch (error) {
    console.log(error)
    return messages.unexpectedError;
  }
}
const FetchData = async (endPoint) => {
  try {
    const {token}=authInfo();

    const response = await axios.get(`${backendUrls.apiUrl}/${endPoint}`,{
      headers:{
      "Accept":"application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization:`Bearer ${token}`
      }
    });
    return { data: response.data };

  } catch (error) {
    console.log(error)
    return messages.unexpectedError;
  }
};
const DeleteData=async(endPoint) => {
    try {
      const {token}=authInfo();
  
      const response = await axios.delete(`${backendUrls.apiUrl}/${endPoint}`,{
        headers:{
        "Accept":"application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization:`Bearer ${token}`
        }
      });

      return response.status;
  
    } catch (error) {
      return messages.unexpectedError;
    }
};


const submitForm = async (userData, endPoint) => {
  try {
    const response = await fetch(`${backendUrls.apiUrl}/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        Accept: "application/vnd.api+json",

      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      if (response.status === errorCodes.unauthorized) {
        return messages.invalidCredentials;
      } else {
        return messages.unexpectedError;
      }
    }

    const responseData = await response.json();
    localStorage.setItem("usertoken", responseData.UserToken);
    localStorage.setItem("rule", responseData.UserInfo.role);
    return messages.successful;
  } 
  catch (error) {
    return messages.unexpectedError;
  }
};


export { FetchData, submitForm,PostData ,patchData,DeleteData};
