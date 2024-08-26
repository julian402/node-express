import pruebaMiddleware from "./middlewares/pruebaMiddleware.js";
import productRoute from "./routes/productRoute.js";
import express from "express";

const app = express();

app.use(express.json());
app.use(pruebaMiddleware);

app.use(productRoute);

app.get("/", (req, res) => {
  return res.json("Bienvenido a la Api de productos");
});

// Ruta si no encuentra ninguna ruta

app.get("*", (req, res) => res.status(404).json("Not Found"));

app.listen(3000, () => {
  console.log("Servidor Corriendo");
});
