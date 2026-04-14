import db from 'mongoose';

await db.connect('mongodb+srv://usuario_prueba:123@cluster0.w6ghmta.mongodb.net/marzo2026')
.then(() => {
    console.log('Conexión exitosa a MongoDB');
})
.catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});

const Schema = db.Schema;

const users = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  date:Date
});

const userModel= db.model('users', users, 'users');

console.log(await userModel.find({}));