import express from"express";
import { Add, AdminPost, Addpissa ,AddSaouse,GetOrder,Deletepissa,DeleteSouse } from "../Controlers/AdminCont.js";
import { Allpissa,AllSouse} from"../Controlers/UserCont.js";


const AdminRequest=express.Router();



AdminRequest.get('/login',Add);
AdminRequest.post('/signup',AdminPost);
AdminRequest.get('/orders',GetOrder);
 AdminRequest.post('/pissa',Addpissa);
 AdminRequest.post('/souse',AddSaouse);
  AdminRequest.delete('/dpissa:id',Deletepissa);
 AdminRequest.delete('/souse',DeleteSouse);
   AdminRequest.get('/pissa', Allpissa);
   AdminRequest.get('/souse', AllSouse);


export default AdminRequest
