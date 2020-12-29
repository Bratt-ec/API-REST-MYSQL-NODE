import { Productos } from "../models/Productos.js";
// Obtener todos los productos activos
const getProductos = async (req,res, next) =>{
  try {
    const allProducts = await Productos.findAll({
        where :{
            estado: 1
        }
    });
    res.json(allProducts);
  } catch (error) {
      console.log(error);
      next();
  }
}
// Obtener los productos borrados
const getProductosDelete = async (req,res,next) =>{
    try {
        const allProductsDel = await Productos.findAll({
            where: {
                estado : 0
            }
        });
        res.json(allProductsDel);
    } catch (error) {
        console.log(error);
        next();
    }
}
// Registrar nuevo producto
const addProduct = async (req, res, next) =>{
    const { codigo,nombre, stock,precio_unitario, precio_venta, proveedor, descripcion } = req.body;

    console.log(precio_unitario);
    try {
        await Productos.create({
            codigo,
            nombre, 
            stock: parseInt(stock),
            precio_unitario: parseFloat(precio_unitario), 
            precio_venta: parseFloat(precio_venta), 
            proveedor, 
            descripcion
        });
        res.json('Producto Agregado');
    } catch (error) {
        console.log(error);
        next();
    }
}
// Actualizar producto
const updateProduct = async (req,res,next) =>{
    const { codigo,nombre, stock,precio_unitario, precio_venta, proveedor, descripcion } = req.body;
    try {
        await Productos.update({
            codigo,
            nombre, 
            stock: parseInt(stock),
            precio_unitario: parseFloat(precio_unitario), 
            precio_venta: parseFloat(precio_venta), 
            proveedor, 
            descripcion
        },{
            where:{
                id: req.params.id 
            }
        });
        res.json('Producto Actualizado');
    } catch (error) {
        console.log(error);
        next();
    }
}
// Borrado lógico de producto
const deleteProduct = async (req,res,next) =>{
    try {
        await Productos.update({
            estado: 0
        },{
            where:{
                id: req.params.id
            }
        });
        res.json(`Producto eliminado: ${req.params.id}`);
    } catch (error) {
        console.log(error);
        next();
    }
}
// Borrado absoluto de producto
const deleteProductDefinty = async (req,res,next) =>{
    try {
        await Productos.destroy({
            where:{
                id: req.params.id
            }
        });
        res.json(`Producto eliminado definitivamente: ${req.params.id}`)
    } catch (error) {
        console.log(error);
        next();
    }
}
export {
    getProductos,
    addProduct,
    updateProduct,
    deleteProduct,
    deleteProductDefinty,
    getProductosDelete
}