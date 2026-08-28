import express from"express";
import {GetUserData, Orderpiza,Allpissa,AllSouse,SignUp} from "../Controlers/UserCont.js";
import {GetOrder} from"../Controlers/AdminCont.js"

export const UsersRout=express.Router();



UsersRout.get('/',GetUserData);
 UsersRout.post('/signup',SignUp);
 UsersRout.get('/pissa',Allpissa);
 UsersRout.get('/souse', AllSouse);
 UsersRout.post('/order',Orderpiza);
 //UsersRout.delete('/order', );
 UsersRout.get('/myorders',GetOrder)






