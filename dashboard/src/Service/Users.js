const baseURL = 'http://localhost:2022/api/users'

export async function getAllUsers(page){
    try{
    let endpoint = `${baseURL}?page=${page}`
    let query = await fetch(endpoint)
    let data = await query.json()
    return data.users
    

    } catch(error){
        console.log(error)
    }
}

