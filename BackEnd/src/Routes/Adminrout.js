import express from"express";
import { Add, AdminPost, Addpissa ,AddSaouse,GetOrder } from "../Controlers/AdminCont.js";


const AdminRequest=express.Router();



AdminRequest.get('/login',Add);
AdminRequest.post('/signup',AdminPost);
AdminRequest.get('/orders',GetOrder);
 AdminRequest.post('/pissa',Addpissa);
 AdminRequest.post('/souse',AddSaouse);
// AdminRequest.delete('/pissa',);
// AdminRequest.delete('/souse',);
// AdminRequest.get('/pissa',);
// AdminRequest.get('/souse',);


export default AdminRequest
