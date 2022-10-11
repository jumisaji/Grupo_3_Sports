import {useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Service/Products";
//import './Products.css'
const data = await getAllProducts();

export default function Products() {
    const { id } = useParams();

    let [productID, setProductID] = useState(parseInt(id));
  
    const totalProducts = async () => {
      const endpoint = `${baseURL}`;
      const response = await fetch(endpoint);
      const responseJSON = await response.json();
      return responseJSON;
    };
  
    const prev = () => {
      productID === 1 ? (productID = 1) : setProductID(productID - 1);
    };
    const next = () => {
      totalProducts().then((data) => {
        productID === data.count
          ? (productID = data.count)
          : setProductID(productID + 1);
      });
    };
  
    let [productDetail, setProductDetail] = useState("Cargando...");
  
    const fetchApi = async () => {
      const endpoint = `${baseURL}/${productID}`;
      const response = await fetch(endpoint);
      const responseJSON = await response.json();
      return responseJSON;
    };
  
    useEffect(() => {
      fetchApi(id).then((responseJSON) => setProductDetail(responseJSON));
    }, [productID]);

    return (
     <>
      <h1 style={{ backgroundColor:'#C0C0C0', margin:'0 0 10px 0', padding:'10px', textAlign:'center', borderRadius: '10px'}}>DETALLE DE PRODUCTO</h1>
      <button id="boton-volver"><Link to={`/`}>Volver</Link></button>

      <section id="dashboard_product-caja">
        <div>
          <div className="dashboard_product-subcaja">
            <h3>PRODUCTO {productDetail.id}</h3>
            <h4>Precio: ${productDetail.price}.-</h4>
           </div>
        </div>
     </section>
          <article id="botonera">
        <button onClick={prev}>Anterior producto</button>
        <button onClick={next}>Próximo producto</button>
      </article>
    </>   
    );
}