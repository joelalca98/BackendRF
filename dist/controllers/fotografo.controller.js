"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFotografo = exports.getFotografo = void 0;
const Fotografo_1 = __importDefault(require("../models/Fotografo"));
//Obtener Fotografo
async function getFotografo(req, res) {
    const { id } = req.params;
    const fotografo = await Fotografo_1.default.findById(id);
    return res.json(fotografo);
}
exports.getFotografo = getFotografo;
//Crea un nuevo Fotografo
async function createFotografo(req, res) {
    const { name, description } = req.body;
    const newFotografo = {
        name: name,
        description: description,
    };
    const fotografo = new Fotografo_1.default();
    await fotografo.save();
    return res.json({
        message: 'Fotografo subido correctamente',
        fotografo
    });
}
exports.createFotografo = createFotografo;
;
