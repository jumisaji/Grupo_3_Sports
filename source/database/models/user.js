

module.exports = (sequelize, DataTypes) => {
  let alias = "Users";
  let cols = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    surname:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    identification:{
        type:DataTypes.INTEGER
    },
    phoneNumber:{
        type:DataTypes.INTEGER
    },
    password:{
        type:DataTypes.TEXT
    },
    isadmin:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },
  };
  let config = {
    timestamps:false,
    deletedAt:false,
  };

  const User = sequelize.define(alias, cols, config);
  return User;
};
