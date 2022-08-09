const { readFileSync, writeFileSync } = require('fs');
const {resolve} = require('path');
const {hashSync} = require('bcryptjs');

const model = {
    index: function(){
        let file = resolve(__dirname,'../data','users.json');
        let data = readFileSync(file);
        return JSON.parse(data);
      },
      one:function(id){
        let file = resolve(__dirname,'../data','users.json');
        let data = readFileSync(file);
        let users = JSON.parse(data);
        return users.find(users => users.id === id)
      },
    create: function(data){
        let file = resolve(__dirname,'../data','users.json');
        let info = readFileSync(file);
        let users = JSON.parse(info);
        let lastUser= users[users.length - 1];
        return Object({
          id: users.length == 0 ? 1 : lastUser.id + 1,
          name: data.name,
          surname: data.surname ,
          email: data.email,
          identification: data.identification,
          phoneNumber: data.phoneNumber,
          usersProfilePhoto: data.usersProfilePhoto,
          password: hashSync(data.password,10),
          isAdmin: data.email.includes('@grupo3.com')
        })
      },
    write: function(data) {
        let file = resolve(__dirname,'../data','users.json');
        let info = JSON.stringify(data,null,2);
        return writeFileSync(file, info);
      },
    }

module.exports = model;