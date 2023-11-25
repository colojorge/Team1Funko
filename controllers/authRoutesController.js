
const authRoutesControllers = {
    login: (req, res) => res.send('Ruta logearse admin'),
    postLogin: (req, res) => res.send('Ruta enviar logearse admin'),
    register: (req, res) => res.send('Ruta registrarse admin'),
    postRegister: (req, res) => res.send('Ruta enviar registrarse admin')
}

export default authRoutesControllers;