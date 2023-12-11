import { products } from "../src/models/Products.js";
const shopControllers = {
  shop: (req, res) => res.render("shop", { products }),
  item: (req, res) => res.send(`Route for Item id: ${req.params.id} view`),
  add: (req, res) => res.send("Ruta para agregar item al carrito"), // ruta para agregar item al carrito
  cart: (req, res) => res.render("cart"), // ruta devuelve la vista con lo que tengo en el carrito
  postCart: (req, res) => res.send("Envia contenido del carrito para comprar"), // ruta que envia contenido del carrito (comprar)
  notFound: (req, res) => res.render("notfound"),
};

export default shopControllers;
