function manipularReq(req, res, next) {
  req.nuevaPropiedad = "Este es un valor que no existia";
  next();
}

export default manipularReq;
