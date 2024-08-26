function pruebaMiddleware(req, res, next) {
  console.log("Prueba Middleware");
  next();
}

export default pruebaMiddleware;
