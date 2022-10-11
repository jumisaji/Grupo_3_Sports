import {useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Service/Products";
//import './Products.css'
const data = await getAllProducts();

export default function Products() {
    const [page,setPage]= useState(0)
    const [pages,setPages]= useState(0)
    const [product,setProduct]= useState([])
    const [count,setCount]= useState(0)

    useEffect(()=> {getAll(page).then((data) => {
        setProduct(data)
           
    })},[page])

    useEffect(()=>{
        const countApi = async () =>{
            let request = await fetch("http://localhost:2022/api/products")
            let response = await request.json()
            
            setCount(response.count)
            
        }
        countApi()
    },[])

    useEffect(()=>{
        const pagesApi = async () =>{
            let request = await fetch("http://localhost:2022/api/products")
            let response = await request.json()
            setPages(response.pages)
        }
        pagesApi()
    },[])
 

    const next = ()=>  page==pages? setPage(0):setPage(page+1)
    const prev = ()=>  page==0? setPage(pages):setPage(page-1)
    return (
        <>
    {product.map((p)=>(
    <ul key={p.id} className="card">
        <li className="green-title">
            <a target="_blank" href={`http://localhost:2022/api/products/detail/${p.id}`}>
             {p.name}
            </a>
        </li>
        <li className="listaUserProds" key={p.id}>
            
            <img className="cardImage" src={p.image}></img>
            
            <p className="categoria">Categoría: {p.category.toUpperCase()}</p>
            <p className="precio">${p.price}.00</p>
        </li>
    </ul>
    ))}
    <div className="buttons">
        <button className="btnCalc"  onClick={prev}><i class="fa-solid fa-caret-left"></i> Anteriores</button><button className="btnCalc" onClick={next}>Siguientes <i class="fa-solid fa-caret-right"></i></button>
    </div>   
</>

    );
}