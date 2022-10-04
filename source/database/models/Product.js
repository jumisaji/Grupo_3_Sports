
module.exports = (sequelize, DataTypes) => {
  let alias = "products";
  let cols = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      imageid:{
        type: DataTypes.STRING,
      },
      brand:{
        type: DataTypes.STRING,
      },
      color:{
        type: DataTypes.TEXT,
      },
      description:{
        type: DataTypes.STRING,
      }
   
}
  let config = {
    timestamps:false,
    deletedAT:false,
  }

  const products= sequelize.define(alias, cols, config);
  return products;
  };
