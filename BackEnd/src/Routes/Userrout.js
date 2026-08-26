import express from"express";
import {GetUserData, Orderpiza} from "../Controlers/UserCont.js";
export const UsersRout=express.Router();



UsersRout.get('/',GetUserData);
// UsersRout.post('/signup',);
// UsersRout.get('/pissa',);
// UsersRout.get('/souse',);
UsersRout.post('/order',Orderpiza);
// UsersRout.delete('/order',);
//UsersRout.get('/myorders')






