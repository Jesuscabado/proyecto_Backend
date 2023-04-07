import Juego from "../models/juego.js";


export const getAll = async (req, res) => {
    try {
        let juegos = await Juego.findAll({
        attributes: ["idproducto", "nombre", "descripcion", "precio","imagen", "stock",  "create_date"],
    });
    return [0, juegos];
    } catch (error) {
        return [1, error];
    }
};


  const getById = async (req, res) => {
    try {
        let juego = await Juego.findOne({
        attributes: ["idjuego", "nombre", "descripcion", "precio","imagen", "stock",  "create_date"],
        where: { idjuego: req.params.id }
    });
    return [0, juego];
    } catch (error) {
        return [1, error];
    }
};

const update = async (data, idjuego) => {
   try {
    let juego = await Juego.update(data, {
        where: {
             idjuego: idjuego,
            },
        });

        return [0, juego];
    } catch (error) {
        return [1, error];
    }
};

const borrar = async (idjuego) => {
    try {
        let juego = await Juego.destroy({
            where: {
                idjuego: idjuego,
            },
        });
        return [0, juego];
    } catch (error) {
        return [1, error];
    }
};

export default {
    getAll,
    getById,
    update,
    borrar,
};