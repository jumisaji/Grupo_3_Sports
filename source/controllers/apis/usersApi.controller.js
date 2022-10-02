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
}