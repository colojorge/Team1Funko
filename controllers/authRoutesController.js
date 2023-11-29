import postForm from "../src/models/Formulario.js";

const authRoutesControllers = {
    login: (req, res) => res.send('Ruta logearse admin'),
    postLogin: (req, res) => res.send('Ruta enviar logearse admin'),
    register: (req, res) => res.send('Ruta registrarse admin'),
    // postRegister: (req, res) =>{res.send('Ruta enviar registrarse admin postRegister COCO')}
    postRegister: async (req, res) => {
        const result = await postForm(req.body);
        console.log(result);
        // res.send('Registro exitoso')
    }
}



export default authRoutesControllers;