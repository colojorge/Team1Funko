import { products } from "../src/models/Products.js";
const adminRoutesControllers = {
  admin: (req, res) => res.render("admin", { products }),
  create: (req, res) => res.send("Ruta crear admin"),
  postCreate: (req, res) => res.send("Ruta enviar admin"),
  edit: (req, res) => res.render("edit", { id: req.params.id }),
  putEdit: (req, res) => res.send("Ruta para hacer camios admin id PUT"),
  delete: (req, res) => res.send("Ruta para eliminar admin"),
};

export default adminRoutesControllers;
