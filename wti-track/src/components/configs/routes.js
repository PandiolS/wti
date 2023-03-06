import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "../homepage/homepage";
import AppLayout from "../layout/appLayout";

class AppRoutes extends Component {


    render() {

        return (
            <Routes>

                <Route path="/" element={<AppLayout />}>

                    <Route path="/" element={<HomePage />} />

                    {/* <Route path="*" element={<NF404 />} /> */}

                </Route>

            </Routes>


        )
    }
}


export default AppRoutes;


