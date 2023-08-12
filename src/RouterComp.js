import React, { useState } from "react";
import { BrowserRouter, NavLink, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import StoreData from "./Store";
import Addstudent from "./Addstudent";

const RouterComp= ()=>{

    const [studentdata,setstudentdata]=useState([
        {Name:"John",Age:22,Course:"EA23", Batch:"March",Change:"Edit"},
        {Name:"Dabloo",Age:42,Course:"EA21", Batch:"Jan",Change:"Edit"},
        {Name:"Vishal",Age:62,Course:"EA22", Batch:"Feb",Change:"Edit"},
        {Name:"Arjun",Age:26,Course:"EA24", Batch:"Dec",Change:"Edit"},
        {Name:"Vimal",Age:42,Course:"EA25", Batch:"Nov",Change:"Edit"}

    ])
    return(
        <>
         <BrowserRouter>
         <div className="header">
         <NavLink to={'/'}>Home</NavLink>
         <NavLink to={'/student'}>Student</NavLink>
         <NavLink to={'/contact'}>Contact</NavLink>
         
         </div>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/student" element={
            <StoreData.Provider value={{Studata:studentdata,setstudata:setstudentdata}}>
                <Student></Student>
                </StoreData.Provider>
            }></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/Addstudent" element={
                <StoreData.Provider value={{Studata:studentdata,setstudata:setstudentdata}}>
                <Addstudent/>
                </StoreData.Provider>
            }></Route>

         </Routes>
         </BrowserRouter>
        </>
    )
}
export default RouterComp;