module.exports= (sequelize, DataTypes) => {
    let alias = "Sizes";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          sizesOption: {
              type: DataTypes.INTEGER
          }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Size = sequelize.define(alias, cols, config);
    return Size;
    }