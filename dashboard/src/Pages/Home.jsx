import { useState, useEffect } from "react"

export default function Home() {
  
    let [users, setUsers] = useState(0);
    let [categories, setCat] = useState([]);

    //Todos los datos de los usuarios

  const datos = async (resource) => {
    const info = await fetch("http://localhost:2022/api/"+ resource);
    const data = await info.json();
    return data;
  };

  useEffect(() => {
    datos("users").then((data) => {
      console.log(data);
      setUsers(data.users.length);
    })
    datos("products").then((data) => {
      console.log(data);
      setCat(data.countByCategories)
    })
  }, []);

    return (
        <>
      <section id="dashboard_datos-resumen">
            <article className="dashboard_subcaja-datos">
              <h4>USUARIOS:</h4>
              <p>{users}</p> 
            </article>
            {
              categories.map(category => 
                <article className="dashboard_subcaja-datos">
                <h4>{category.name}:</h4>
                <p>{category.count}</p>
              </article>
              )
            }
      </section>
    </>
    )
    }