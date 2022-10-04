const baseURL = 'http://localhost:2022/api/products'

export async function getAllProducts(page=1){
    try{
    let endpoint = `${baseURL}?page=${page}`
    let query = await fetch(endpoint)
    let data = await query.json()
    return data.products

    } catch(error){
        console.log(error)
    }
}

export async function findId (id){
    try {
        let endpoint = `${baseURL}/${id}`
        let products = await axios.get(endpoint)
        console.log(products)
        return products.data
        
    } catch (error) 
    {
        console.log(error);
}
}