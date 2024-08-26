import { validationResult } from "express-validator";

let products = [
  {
    id: 1,
    titulo: "Smartphone",
    descripcion:
      "Un teléfono inteligente con pantalla de 6.5 pulgadas, 128GB de almacenamiento y cámara de 48MP.",
  },
  {
    id: 2,
    titulo: "Laptop",
    descripcion:
      "Una laptop ultradelgada con procesador Intel i7, 16GB de RAM y 512GB de SSD.",
  },
  {
    id: 3,
    titulo: "Auriculares Inalámbricos",
    descripcion:
      "Auriculares Bluetooth con cancelación de ruido y una duración de batería de hasta 20 hora",
  },
  {
    id: 4,
    titulo: "Tablet",
    descripcion: "Una Tablet con la mejor calidad de Pantalla",
  },
];

function getAll(req, res) {
  return res.json(products);
}

function create(req, res) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const newProduct = {
      id: req.body.id,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
    };
    products.push(newProduct);
    return res.json({
      message: "Se agrego correctamente",
    });
  }
  return res.json({ errors: result.array() });
}

function update(req, res) {
  const productId = Number(req.params.id);
  const tituloId = req.body.titulo;
  const descId = req.body.descripcion;

  const newArray = products.map(function (product) {
    if (product.id === productId) {
      return {
        ...product,
        titulo: tituloId || product.titulo,
        descripcion: descId || product.descripcion,
      };
    }
    return product;
  });

  products = newArray;
  return res.json(newArray);
}

function destroy(req, res) {
  const productId = Number(req.params.id);
  const newArray = products.filter((product) => product.id !== productId);
  products = newArray;
  return res.json(`Producto ${productId} Eliminado`);
}

function find(req, res) {
  console.log(req.nuevaPropiedad);
  const productId = Number(req.params.id);
  const newFind = products.filter((product) => product.id === productId);
  return res.json(newFind);
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  destroy: destroy,
  find: find,
};
