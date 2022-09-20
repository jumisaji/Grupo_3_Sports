module.exports= (sequelize, DataTypes) => {
    let alias = "favs";
    let cols = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
          },
          userid:{
            type: DataTypes.STRING,
            foreignKey:true
          },
          
          imageid:{
            type: DataTypes.STRING,
            foreignKey:true
          }
        
    };    
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Color = sequelize.define(alias, cols, config);
    return Color;
    }