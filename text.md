// const productId = Number(req.params.id);
// for (const product of products) {
// if (product.id === productId) {
// product.titulo = req.body.titulo || product.titulo;
// product.descripcion = req.body.descripcion || product.descripcion;
// return res.json({
// message: `Se han actualizado los datos del producto ${product.id}`,
// });
// }
// }
// return res.json({
// message: "No se encontro el ID",
// });

// ========================================

// for (const product of products) {
// if (product.id === productId) {
// product.titulo = req.query.titulo;
// product.descripcion = req.query.descripcion;

// return res.json({
// message: `Se han actualizado los grupos del producto ${product.id}`,
// });
// }
// }
// return res.json({
// message: "No se encontro el ID",
// });

// ========================================

// for (const product of products) {
// if (product.id !== productId) {
// newArray.push(product);
// }
// }
// products = newArray;
// return res.json({
// message: `Se han eliminado correctamente el producto ${req.params.id}`,
// });

// =======================================

// for (const product of products) {
// if (product.id === productId) {
// return res.json(product);
// }
// }
// return res.json({
// message: "No se encontro el id",
// });
