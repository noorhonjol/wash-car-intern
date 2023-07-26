import axios from "axios";
import { errorCodes, messages, backendUrls } from "./constants";

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
    console.log(response)
    return { data: response.data };

  } catch (error) {
    return messages.unexpectedError;
  }
};


const authInfo = () => {
  return { rule: localStorage.getItem("rule"), token: localStorage.getItem("usertoken")};
}
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

export { FetchData, submitForm, authInfo };
