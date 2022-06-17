import React from 'react'

import useAuthContext from "./contextApi/useAuthContext";
import { Navigate } from "react-router-dom";
const Profile = () => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate replace to="/login" />;
    }
    return (
        <>
            <h1>Profile</h1>
        </>
    );
};
