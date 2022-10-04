import React from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Service/Products";
import './Products.css'
const data = await getAllProducts();

export default function Products() {
    return (
        <div className='main'>
            <div className="prod-cont">
                <div className="div-cont-prod">
                    <p className="top-p-prod">Productos:</p>
                    <ul>
                        {data.products.map((product, index) => <li className="prod-list" key={index}><Link to={`/product/${product.id}`}>{product.nombre}</Link></li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}