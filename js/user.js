

// Clase Constructora del Objeto User 
export class Usuario{
    constructor(nombre, apellido, email, genero,  user_name, peliculas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.genero = genero;
    this.user_name = user_name;
    this.peliculas = peliculas;
    }
  // Metodos
//Obtengo el mail
        getEmail(email) {
          return `Su Email es ${this.email}`;
        };
//Datos del Usuario
        getDatosUsuario () {
          return `Nombre:  ${this.nombre} \n
                  Apellido: ${this.apellido}\n
                  Email: ${this.email}\n
                  Genero: ${this.genero}\n 
                  User Name: ${this.user_name}\n`;
        }
//Agrego un genero
        getaddGenero() {
          return `Bienvenido ${this.nombre} ${this.apellido} `;
        }
//Saludo al usuario
        getSaludo () {
          return `Bienvenido ${this.nombre} ${this.apellido}`;
        }
//Actualizo el mail
        setEmail (email) {
          this.email = email;
          return console.log(`Su nuevo email es  ${this.email}`);
        }    
//Agregar Pelicula a un usuario
        addPelicula (pelicula) {
          this.peliculas.push(pelicula);
        }    

// Listado de peliculas
        getPeliculas() {
          let nombre = this.nombre;
          let listaPeliculas = `\nPeliculas favoritas de ${nombre} \n \n` ;
          this.peliculas.map((elemento) => {
            listaPeliculas += `Nombre: ${elemento.nombrePelicula}\nDirector: ${elemento.director}\n\n`;
          });
          return  listaPeliculas;
        }
  }

// Arrays de Peliculas
  export const listapeliculas = [
    {
      nombrePelicula: "Batman 1989",
      director: "Matt Reeves",
    },
    {
      nombrePelicula: "Batman 2022",
      director:"Tim Burton",
    },
    {
      nombrePelicula: "Iron man 2",
      director:"Jon Favreau",
    }
  ]
  




