import { useState, useEffect } from "react"
import {getAllUsers} from '../Service/Users';
import {getAllProducts} from '../Service/Products';
//import "./Home.css"
import Products from "./Products";
import Users from "./Users";
//const data = await getAllProducts();
//const users =await getAllUsers();

export default function Home() {
    const users = async (page = 1) => {
        const info = await fetch("http://localhost:2022/api/users/?page=" + page);
        const data = await info.json();
        return data;
      };
    
    //    useEffect(() => {
    //      datosUsers().then((data) => setUserCount(data.count));
    //    }, []);
    
      //Todos los datos de los productos
    
      const data = async (page = 1) => {
        const info = await fetch(
          "http://localhost:2022/api/products/?page=" + page
        );
        const data = await info.json();
        return data;
      };
    
    //    useEffect(() => {
    //      datosProducts().then((data) => setProductCount(data.count));
    //    }, []);
    
    return (
        <>        
        <section id="dashboard_datos-resumen">
  
          <div>
            <div id="dashboard_datos-caja-datos">
              <article className="dashboard_subcaja-datos">
                <h4>USUARIOS:</h4>
                {/* <p>{userCount}</p> */}
              </article>
              <article className="dashboard_subcaja-datos">
                <h4>PRODUCTOS:</h4>
                {/* <p>{productCount}</p> */}
              </article>
            </div>
          </div>
        </section>
      </>
    )
    }