import request from 'supertest';
import app from '../src/app';
export const createProductMother = async () => {
    const newProduct = {
        "nombre":"Producto Testing",
        "referencia":"productoTest2024",
        "precio": 9999,
        "peso":1,
        "categoria":"test",
        "stock":99,
        "activo":1
    };
    const response = await request(app).post('/api/products/create').send(newProduct);
    if (response.status !== 201) {
        throw new Error('Error al crear producto de prueba');
    }
    return response;
};

module.exports = { createProductMother };