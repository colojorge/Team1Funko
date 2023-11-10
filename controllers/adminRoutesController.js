
const adminRoutesControllers = {
    admin: (req, res) => res.send('Ruta admin'),
    create: (req, res) => res.send('Ruta crear admin'),
    postCreate: (req, res) => res.send('Ruta enviar admin creado'),
    edit: (req, res) => res.send('Ruta para editar admin id'),
    putEdit: (req, res) => res.send('Ruta para hacer camios admin id PUT'),
    delete: (req, res) => res.send('Ruta para eliminar admin')
};

export default adminRoutesControllers;