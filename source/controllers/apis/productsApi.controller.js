const {products} = require('../../database/models');
const {Op} = require('sequelize');
 
module.exports = {
    all: async (req,res) => {
        try {
            let filters = {}
            let page = 0
            if(req.query.price){
                filters.price = {
                    [Op.lte]: req.query.price
                }
            }
            if(req.query.page){
                page = parseInt(req.query.page)
            }
            let productsApi = await products.findAll({
                include:{all:true},
                where: filters,
                limit: 10,
                offset: page
            })

            let data = productsApi.map(product => Object({
                    id:product.id,
                    name: product.name,
                    description: product.description
                })
            )

            return res.status(200).json({data})
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    one: async (req,res) => {
        try {
            let result  = await products.findByPk(req.params.id,{
                include:{all:true}
            })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}