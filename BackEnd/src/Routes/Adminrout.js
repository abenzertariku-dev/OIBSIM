import express from"express";
import { Add, AdminPost } from "../Controlers/AdminCont.js";


const AdminRequest=express.Router();



AdminRequest.get('/login',Add);
AdminRequest.post('/signup',AdminPost);
// AdminRequest.get('/orders',);
// AdminRequest.post('/pissa',);
// AdminRequest.post('/souse',);
// AdminRequest.delete('/pissa',);
// AdminRequest.delete('/souse',);
// AdminRequest.get('/pissa',);
// AdminRequest.get('/souse',);


export default AdminRequest
