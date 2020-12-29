import Sequelize from "sequelize";
import db from "../config/db.js";

export const Usuario = db.define('tb_usuarios', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    rol:{
        type: Sequelize.STRING
    }
});