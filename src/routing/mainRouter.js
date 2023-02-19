import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../components/MainPage/MainPage";
import Login from "../screens/LoginPage/Login";
import Members from "../screens/LoginPage/MembersPage/Members";

export default function MainRouting(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/*" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/member" element={<Members/>}/>
        </Routes>
        </BrowserRouter>
    )
}