const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

// Array de usuarios predefinidos
const users = [
 {
    id: 1,
    username: 'user1',
    password: '$2b$10$b4JPJVkUoYjPX/eGtBM8uHMXmEtj/g/HhHWCf/PgFZFwkGQsQi2'
 },
 {
    id: 2,
    username: 'user2',
    password: '$2b$10$Vb.LpFhcBTfQPgEfXRngeLsFpUHcWWcFpRRcIpwWyTnHpLJmN4q'
 }
];

// Ruta de autenticación
app.post('/login', async (req, res) => {
 const { username, password } = req.body;

 const user = users.find(user => user.username === username);

 if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
 }

 const isValidPassword = await bcrypt.compare(password, user.password);

 if (!isValidPassword) {
    return res.status(400).json({ error: 'Contraseña incorrecta' });
 }

 const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

 res.json({ token });
});

// Ruta protegida
app.get('/protected', authenticateToken, (req, res) => {
 res.json({ message: 'Ruta protegida' });
});

// Función de autenticación del token JWT
function authenticateToken(req, res, next) {
 const authHeader = req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];

 if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
 }

 jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
       return res.status(403).json({ error: 'Token inválido' });
    }

    req.user = user;
    next();
 });
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log(`Servidor corriendo en el puerto ${port}`);
});