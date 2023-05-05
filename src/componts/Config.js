import React from "react";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Config = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <SignUp />
                            <SignIn />

                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Config;