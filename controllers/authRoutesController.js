import postForm from "../src/models/Formulario.js";

const authRoutesControllers = {
    login: (req, res) => res.send('Ruta logearse admin'),
    postLogin: (req, res) => res.send('Ruta enviar logearse admin'),
    register: (req, res) => res.send('Ruta registrarse admin'),
    postRegister: async (req, res) => {
        const result = await postForm(req.body)
        const name = req.body.nombre
        console.log(name)
        const mensajes = {
            mensaje1: 'Garcias por registrarte...!',
            mensaje2: 'Ahora podras disfrutar nuestras ofertas y promociones',
            mensaje3: 'Hola ' + name
        }
        res.render('index', { mensajes })
    }
};


export default authRoutesControllers;