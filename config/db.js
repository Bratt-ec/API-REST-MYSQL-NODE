import Sequelize from 'sequelize';
import dotenv from "dotenv";

dotenv.config({path: 'variables.env'});

const { BD_NOMBRE, BD_USER, BD_PASS, BD_HOST, BD_PORT } = process.env;

const db = new Sequelize(BD_NOMBRE,BD_USER, BD_PASS, {
    host: BD_HOST,
    port: BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;