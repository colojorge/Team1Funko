import express from "express";
import mainControllers from "../../controllers/mainController.js";

const router = express.Router();

router.get("/", mainControllers.home);
router.get("/contacto", mainControllers.contact);
router.get("/about", mainControllers.about);
router.get("/fags", mainControllers.fags);
router.get("*", mainControllers.notFound);

export default router;
