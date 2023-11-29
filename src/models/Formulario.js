import conn from '../config/conn.js';


// la informacion que enviamos por postman entra en (data)
const postForm = async (data) => {
    try {
        const{id, nombre, apellido, email} = data;
        console.log(data);

        const response = await conn.query("INSERT formfunko VALUES(?, ?, ?, ?)", [id, nombre, apellido, email]);
        console.log('Registro guardado...!');
        return response;
    } 
    catch (e) {
        console.log('Hubo un error en la creación del registro', e);
        return { error: 'Problema al guardar el registro' }
    }
    finally {
        conn.releaseConnection();
    }
}

export default postForm;