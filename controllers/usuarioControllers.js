import { Usuario } from "../models/Usuarios.js";
import { createHmac } from "crypto";
// Encriptar el password del usuario
const encriptar = (pass) =>{
    let encript = createHmac('sha1', pass).digest('hex');
    return encript;
}
// Valida que las credenciales del usuario sean correctas
const IniciarSesion = async (req,res,next) =>{
    const { usuario, password } = req.body;
    let passEncript = encriptar(password);
    try {
        const resp = await Usuario.findAll({
            where: {
                username: usuario,
                password: passEncript
            }
        });
        if(resp.length === 0){
            res.json("Usuario Incorrecto");
        }else{
            res.json("Usuario Correcto");
        }        
    } catch (error) {
        console.log(error);
        next();
    }
}
// Add usuarios invitados
const addUsuarios = async (req,res,next) =>{
    const { usuario, password} = req.body;
    let passEncript = encriptar(password);
    try {
        let addUser = await Usuario.create({
            username: usuario,
            password: passEncript
        });
        // console.log(addUser.isNewRecord);
        res.json('Usuario agregado');
    } catch (error) {
        console.log(error);
        next();
    }
}
// Delete usuarios invitados
const deleteUsuarios = async (req,res,next) =>{
    try {
        await Usuario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json('Usuario Eliminado');
    } catch (error) {
        console.log(error);
        next();
    }
}
// Update usuario
const updateUsuario = async (req,res,next) =>{
    const { usuario, password } = req.body;
    let passEncript = encriptar(password);
    try {
        await Usuario.update({
            username: usuario,
            password: passEncript
        },{
            where: {
                id: req.params.id
            }
        });
        res.json('Usuario Actualizado');
    } catch (error) {
        console.log(error);
        next();
    }
}


export {
    IniciarSesion,
    addUsuarios,
    updateUsuario,
    deleteUsuarios
}