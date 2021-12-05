
// Generar Funciones de Crear usuario 

// function createUser(email, nombre, apellido) {

//     const newUsuer =
//     {
//          email,
//          nombre,
//          apellido,
//     }

//     console.log('Funcion Nuevo usuario para: ' + email)
//     console.log('Bienvenido ' + nombre + ' ' + apellido)

// }

// createUser('arroyo@gmail.com', 'Emiliano', 'Arroyo');



//Saludo de Bienvenida para Login

alert('Hola! Bienvenido a Classic/Club');




let user = prompt('User Name');




saludo(user);

function saludo(nombre) {

    if (nombre == 'null') {
        alert('No dijiste hola, Chau!');
         
     }else{
         alert('Bienvenido a Classic/Club ' + nombre);
      }
    
}
