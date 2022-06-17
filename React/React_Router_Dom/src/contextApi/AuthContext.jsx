// import React from 'react';
// import { useContext } from 'react';
// import { Navigate } from 'react-router';
import { createContext } from "react";
const AuthContext = createContext();
export default AuthContext;




// export const RequiredAuth = ({children,redirectTo}) => {

//     <AuthContext.Provider value={""}>
//     </AuthContext.Provider>
//     const authCtx = useContext(AuthContext)

//     return authCtx.isLoogedin ? children : <Navigate to={redirectTo}  />

// }
