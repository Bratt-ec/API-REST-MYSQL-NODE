import express  from "express";
const router = express.Router();
import { getProductos, addProduct,updateProduct , deleteProduct, deleteProductDefinty, getProductosDelete } from "../controllers/productoControllers.js";
import { IniciarSesion, addUsuarios, deleteUsuarios, updateUsuario } from "../controllers/usuarioControllers.js";

function Rutas(){
    // Get Productos
    router.get('/productos', getProductos);
    // Get productos eliminados
    router.get('/productos/borrados', getProductosDelete);
    // Add Producto
    router.post('/productos', addProduct);
    // Update Producto
    router.put('/productos/:id', updateProduct);
    // Logic Delete Product
    router.delete('/productos/:id', deleteProduct);
    // Delete Product Definity
    router.delete('/productos/:id', deleteProductDefinty);
    // Iniciar Sesion
    router.post('/usuarios/login', IniciarSesion);
    // Crear usuarios
    router.post('/usuarios', addUsuarios);
    // Update Usuarios
    router.put('/usuarios/:id', updateUsuario);
    // Delete Usuarios
    router.delete('/usuarios/:id', deleteUsuarios );



    return router;
}

export {
    Rutas
}