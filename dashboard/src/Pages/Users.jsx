import React from "react";
import { Link } from "react-router-dom"
import{getAllUsers} from "../Service/Users"
import './Users.css' 
const users = await getAllUsers();


export default function Users() {
    console.log(Users)
    return (
        <div className='main'>
        <div className='cont-users'>
            <div className='div-cont-user'>
                <p className='top-p-user'>Usuarios:</p>
                <ul>
                    {users.Users.map((u, i) => <li className="li-users" key={i}><Link to={`/users/${u.id}`}>{u.nombre}</Link></li>)}
                </ul>
            </div>
            <div className='div-cont-user'>
                <p className='top-p-user'>Último usuario:</p>
                <p className='last-p-user'>Id: <span className='span-user'>{lastUser.id}</span></p>
                <p className='last-p-user'>Nombre: <span className='span-user'>{lastUser.nombre}</span></p>
                <p className='last-p-user'>Email: <span className='span-user'>{lastUser.email}</span></p>
            </div>
        </div>
    </div>
    );
}