import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './frontend/Home/Home';
import GotoSchool from './frontend/gotoschool/GotoSchool';
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>


                <Route path="/" element={<GotoSchool />} />
                <Route path="GoToSchool" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}
