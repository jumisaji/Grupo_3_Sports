import React from "react";
//import { useState, useEffect } from "react"
import {getAllUsers} from '../Service/Users';
import {getAllProducts} from '../Service/Products';
import "./Home.css"
import Products from "./Products";
import Users from "./Users";
const data = await getAllProducts();
const users =await getAllUsers();

export default function Home() {
    
    return (
         <div className='main'>
            <div className="home-cont">
                 <div className="div-cont">
                     <p className='top-p'>Total de productos:</p>
                     <p className="bottom-p"> {Products.count}</p>
                 </div>
                 <div className="div-cont">
                     <p className='top-p'>Total de usuarios:</p>
                      <p className="bottom-p">{Users.count}</p> 
                 </div>
             </div>
        </div>
    )
    }