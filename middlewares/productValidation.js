import { body } from "express-validator";

const productValidation = {
  create: [
    body("id")
      .notEmpty()
      .withMessage("El campo Id es obligatorio")
      .isNumeric()
      .withMessage("El valor debe ser numerico"),
    body("titulo")
      .notEmpty()
      .withMessage("El campo titulo es obligatorio")
      .isString()
      .withMessage("El campo debe ser un String"),
    body("descripcion")
      .notEmpty()
      .withMessage("El campo descripcion es obligatorio")
      .isString()
      .withMessage("El campo debe ser un String"),
  ],
  update: [
    body("titulo").isString().withMessage("El campo titulo debe ser un String"),
    body("descripcion").notEmpty().isString(),
  ],
};

export default productValidation;
