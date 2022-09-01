module.exports= (sequelize, DataTypes) => {
    let alias = "size";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          sizesOption: {
              type: DataTypes.STRING
          }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Size = sequelize.define(alias, cols, config);
    return Size;
    }