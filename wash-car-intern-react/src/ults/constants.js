const errorCodes={
    unauthorized:401,
}

const messages={
    unexpectedError:"unexpected error happen try again",
    successful:"successful",
    unauthorized:"you are unoutherized to do this action",
    invalidCredentials:"Invalid credentials"
}

const backendUrls= {
    apiUrl:"http://127.0.0.1:8000/api",
    loginEndPoint:"login",
    signUp:"register",
    logout:"logout",
}

const rules={
    customerRule:"customer",
    workerRule:"worker",
    AdminRule:"admin",
}





export {errorCodes,messages,backendUrls,rules}