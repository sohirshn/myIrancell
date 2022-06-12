import {routes} from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../page/dashboard";
function Router() {
    const { dasboard} = routes;
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={dasboard} element={<Dashboard/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;