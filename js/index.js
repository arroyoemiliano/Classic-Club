import {listapeliculas} from "./user.js";
import {Usuario} from "./user.js";
import {ListaUsuarios} from "./listUser.js";





const lista = new ListaUsuarios([]);


 //Creo los Objetos Usuarios 
 let user1 =   new Usuario ('Emiliano', 'Arroyo', 'arroyo.emiliano@gmail.com', 'Masculino', "emi", []);
 let user2 =   new Usuario ('Carlos', 'Perez', 'carlos.perez@gmail.com', 'Masculino', "carlos",[]);
 let user3 =   new Usuario ('Carla', 'Rodriguez', 'carla.rodriguez@gmail.com', 'Femenino', "carla",[]);
 
 lista.AddUsuario(user1)
 lista.AddUsuario(user2)
 lista.AddUsuario(user3)

let user4 = new Usuario ('Emanuel', 'Arroyo' ,"arroyo.emanuel@gmail.com", 'Masculino', 'ema' ,listapeliculas);

lista.AddUsuario(user4)

user1.addPelicula(listapeliculas[0])
console.log(user1.getDatosUsuario())
console.log(user1.getPeliculas())
console.log(lista);
