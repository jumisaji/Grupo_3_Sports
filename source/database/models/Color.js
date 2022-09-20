module.exports= (sequelize, DataTypes) => {
    let alias = "colors";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          colorsOption: {
              type: DataTypes.TEXT
          }
    };    
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Color = sequelize.define(alias, cols, config);
    return Color;
    }