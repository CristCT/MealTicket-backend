import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const openRoutes = ['loginUser', 'registerUser'];
  const query = req.body.query || '';

  if (
    req.method === 'POST' &&
    openRoutes.some((route) => query.includes(route))
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
    res.status(401).send('Token no válido');
  }
};

export default authMiddleware;
