module.exports= (sequelize, DataTypes) => {
    let alias = "category";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          bikesOption: {
              type: DataTypes.STRING
          }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Category = sequelize.define(alias, cols, config);
    return Category;
    }