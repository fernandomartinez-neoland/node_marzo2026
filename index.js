import db from 'mongoose';

db.connect('mongodb+srv://usuario_prueba:123@cluster0.w6ghmta.mongodb.net/')
.then(() => {
    console.log('Conexión exitosa a MongoDB');
})
.catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
});