import React from 'react'
import { useState, useEffect } from "react"

const Users = () => {
let [users, setUsers] = useState(0);
const datos = async (resource) => {
  const info = await fetch("http://localhost:2022/api"+ resource);
  const data = await info.json();
  return data;
};
useEffect(() => {
  datos("users").then((data) => {
    console.log(data);
    setUsers(data.users);
  })
}, []);

  return (
    <div>
      <h1>USUARIOS GO BIKE</h1>
      <div className='div-cont-users'>
        <div>
          <p className='top-p-user'>Usuarios Registrados:</p>
          <ul>
            <p className='id-user'>Id: <span className='span-user'>{users.id}</span></p>
              <p className='name-user'>Nombre: <span className='span-user'>{users.nombre}</span></p>
              <p className='email-user'>Email: <span className='span-user'>{users.email}</span></p>
              </ul>
              </div>
              </div>
</div>
  )
}

export default Users