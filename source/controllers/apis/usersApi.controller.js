const {User} = require('../../database/models');
//const {Op} = require('sequelize');
//const {hashSync} = require('bcryptjs')

module.exports = {
    all: async(req,res) => {
        try {
            let users = await User.findAll({
                include: {
                    all: true
                }
            });
            return res.status(200).json(users);

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    one: async (req, res) =>{
        try {
            let userDB = await User.findByPk(
                req.params.id, {
                    include: {
                        all: true
                    }
                }
            )
            if(userDB){

                return res.status(200).json(userDB);
            }else{
                return res.status(404).json('No se encontró este usuario.');
            }
        } catch (error) {
            return res.status(500).json(error);
        }

    },
    /*process: async (req, res) =>{

        try {
            req.body.password = hashSync(req.body.password,10)
            req.body.isAdmin = req.body.username.includes('@dh.com') ? true: false

            let newUser = await User.create(req.body);

            if(newUser){
                return res.status(200).json(newUser);
            }else{
                return res.status(404).json('No se creó el usuario');
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    },*/
}