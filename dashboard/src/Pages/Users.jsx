import {useEffect, useState} from "react";
import { Link } from "react-router-dom"
import{getAllUsers} from "../Service/Users"
//import './Users.css' 
const data = await getAllUsers();


export default function Users() {
    //console.log(Users)
    const { id } = useParams();

    let [userID, setUserID] = useState(parseInt(id));
  
    const totalUsers = async () => {
      const endpoint = `${baseURL}`;
      const response = await fetch(endpoint);
      const responseJSON = await response.json();
      return responseJSON;
    };
  
    const prev = () => {
      userID === 1 ? (userID = 1) : setUserID(userID - 1);
    };
    const next = () => {
      totalUsers().then((data) => {
        userID === data.count ? (userID = data.count) : setUserID(userID + 1);
      });
    };
  
    //Al no recargar la página, queda extraña la navegacion leyendo un valor anterior en el params
  
    let [userDetail, setUserDetail] = useState("Cargando...");
  
    const fetchApi = async () => {
      const endpoint = `${baseURL}/${userID}`;
      const response = await fetch(endpoint);
      const responseJSON = await response.json();
      return responseJSON;
    };
  
    useEffect(() => {
      fetchApi(userID).then((responseJSON) => setUserDetail(responseJSON));
    }, [userID]);
    return (
        <>
      <h1 style={{ backgroundColor:'#C0C0C0', margin:'0 0 10px 0', padding:'10px', textAlign:'center', borderRadius: '10px'}}> DETALLE DE USUARIO</h1>
      <button id="boton-volver"><Link to={`/`}>Volver</Link></button>

      <section id="dashboard_user-caja">
        <div className="dashboard_user-subcaja">
          <h3>USUARIO {userDetail.id}</h3>
          <h4>Nombre: {userDetail.nombre}</h4>
          <h4>Apellido: {userDetail.apellido}</h4>
          <h4>Email: {userDetail.email}</h4>
          <h4>Administrador: {userDetail.isAdmin ? "Si" : "No"}</h4>
        </div>
      </section>

      <article id="botonera">
        <button onClick={prev}>Anterior usuario</button>
        <button onClick={next}>Próximo usuario</button>
      </article>
    </>
    );
}