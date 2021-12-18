
//Clase lista usuarios
export class ListaUsuarios {

    constructor( lista ) {
        this.lista = lista;
    }

    AllUsuaerios() {
        // mostrarme todos usuarios existentes devolviendo this.lista
        return this.lista;
    }

    AddUsuario( usuario ) {
        // Agregue el usuario a la this.lista
        this.lista.push(usuario)
    }

    findOneByIdItem(user_name) {
        // muestre el item <> encuentre el item en this.lista y lo devuelva
        const usuario = this.lista.find( element => element.user_name === user_name )

        if ( !user_name ) {
            console.log('El nombre de usuario NO existe')
        }
        return user_name;
    }
    updateUsuario (user_name, email){
        const usuario = this.lista.find( element => element.user_name === user_name )
        const index = this.lista.indexOf( element );
        this.lista[index].email = email;
        
    }
    deleteItem( user_name ) {
        // Eliminar user_nameen la lista de usuarios        
        const usuario = this.findOneByIdItem( user_name );
        const index = this.lista.indexOf( user_name );
        this.lista.splice(index,1);
    }
}
