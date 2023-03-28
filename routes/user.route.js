// load express library
const express = require(`express`);

// create object express
const app = express();

// allow to read a reqest from body
// with json format
// 
app.use(express.json())

// load a controller of meja
const userController = require(`../controllers/user.controller`);

// route to add new meja
app.post(`/user`, userController.addUser);

// route for get all menu
app.get(`/user`, userController.getUser);

// crate route for search user
app.post(`/user/find`, userController.findUser);

// create route for update menu
app.put(`/user/:id_user`, userController.updateUser)

// create route for delete menu
app.delete(`/user/:id_user`, userController.deleteUser)

// export app object
module.exports = app