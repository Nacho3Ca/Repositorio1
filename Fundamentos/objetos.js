const empleado = {
    nombre:'juan',
    apellido: 'castillo',
    dni:3343439411,
    correo:{
        gmail: 'juan@gmail.com',
        outlook: 'juan@hotmail.com'
    }
}

//fomar tradicional
//const nombre = empleado.nombre
//const gmail = empleado.correo.gmail
//const outlook = empleado.correo.outlook

//destructuring object
const { gmail,outlook } = empleado.correo
const { apellido,dni } = empleado

console.log(`
    correo gmail: ${gmail}
    correo outlook: ${outlook}
    apellido: ${apellido}
    dni: ${dni}
`)
