module.exports= (sequelize, DataTypes) => {
    let alias = "brands";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          brandsOption: {
              type: DataTypes.STRING
          }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Brand = sequelize.define(alias, cols, config);
    return Brand;
    }
