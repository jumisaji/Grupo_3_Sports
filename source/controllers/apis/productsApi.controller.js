const {products} = require('../../database/models');
const {Op} = require('sequelize');
 
module.exports = {
    all: async (req,res) => {
        try {
            let filters = {}
            let page = 0
            
            if(req.query.page){
                page = parseInt(req.query.page)
            }
            let productsApi = await products.findAll({
                include:{all:true},
                where: filters,
                limit: 10,
                offset: page
            })

            let allProducts = await products.findAll() 
            let countByCategories = []
          
            countByCategories.push({name:"All the products", count:allProducts.length})
            countByCategories.push({name:"Ruta", count:allProducts.filter(product => product.category == "Ruta").length}) 
            countByCategories.push({name:"MTB", count:allProducts.filter(product => product.category == "MTB").length}) 
            countByCategories.push({name:"BMX", count:allProducts.filter(product => product.category == "BMX").length}) 
            countByCategories.push({name:"Urban", count:allProducts.filter(product => product.category == "Urban").length}) 
            

            let data = productsApi.map(product => Object({
                    id:product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    imageid: product.imageid,
                    brand: product.brand,
                    color: product.color,
                    description: product.description
                })
            )
            return res.status(200).json({data, countByCategories})
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    one: async (req,res) => {
        try {
            let result  = await products.findByPk(req.params.id,{
                include:{all:true}
            })
            let data = {}
            data.id = result.id
            data.name = result.name
            data.category = result.category
            data.price = result.price
            data.imageid = result.imageid
            data.brand = result.brand
            data.color = result.color
            data.description = result.description

            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}