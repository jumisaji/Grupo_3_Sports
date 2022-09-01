module.exports= (sequelize, DataTypes) => {
    let alias = "color";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          colorsOption: {
              type: DataTypes.STRING
          }
    };    
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Color = sequelize.define(alias, cols, config);
    return Color;
    }
