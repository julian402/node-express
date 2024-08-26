import manipularReq from "../middlewares/manipularReq.js";
import productController from "../controllers/productController.js";
import productValidation from "../middlewares/productValidation.js";
import express from "express";
const router = express.Router();

// Ruta para mostrar todos los productos

router.get("/api/products", productController.getAll);

// Rurta para Crear un nuevo producto

router.post(
  "/api/products",
  productValidation.create,
  productController.create
);

// Ruta Para editar (map)

router.patch("/api/products/:id", productController.update);

// Ruta para eliminar un producto pro Id (Filter)

router.delete("/api/products/:id", productController.destroy);

// Ruta para encontrar por Id

router.get("/api/products/:id", manipularReq, productController.find);

export default router;
