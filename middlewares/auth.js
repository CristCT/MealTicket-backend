import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  if (
    req.method === 'POST' &&
    req.body.query &&
    req.body.query.includes('loginUsuario')
  ) {
    return next();
  }

  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).send('Acceso denegado. No se proporcionó un token.');
  }

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send('Token inválido o expirado.');
  }
};

export default authMiddleware;
