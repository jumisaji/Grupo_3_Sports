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