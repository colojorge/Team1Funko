const mainControllers = {
  home: (req, res) => res.render("home"),
  contact: (req, res) => res.render("contact"),
  about: (req, res) => res.send("Route for About View"),
  fags: (req, res) => res.send("Route for Fags View"),
  notFound: (req, res) => res.send("Route for notFound View"),
};

export default mainControllers;
