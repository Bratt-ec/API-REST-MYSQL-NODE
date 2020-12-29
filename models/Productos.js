import Sequelize from "sequelize";
import db from "../config/db.js";

export const Productos = db.define('tb_productos', {
    codigo: {
        type: Sequelize.STRING
    },
    nombre: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.INTEGER
    },
    precio_unitario: {
        type: Sequelize.FLOAT
    },
    precio_venta: {
        type: Sequelize.FLOAT
    },
    proveedor: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.NUMBER
    }
});
