"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getPhoto = exports.getPhotos = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Photo_1 = __importDefault(require("../models/Photo"));
async function getPhotos(req, res) {
    const photos = await Photo_1.default.find();
    return res.json(photos);
}
exports.getPhotos = getPhotos;
//Obtener la foto
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findById(id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
//Crea una nueva foto
async function createPhoto(req, res) {
    var _a, _b;
    const { title, description, fotografo } = req.body;
    console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
    const newPhoto = {
        title: title,
        description: description,
        imagePath: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path,
        fotografo: fotografo,
    };
    const photo = new Photo_1.default(newPhoto);
    await photo.save();
    return res.json({
        message: 'Foto subida correctamente',
        photo
    });
}
exports.createPhoto = createPhoto;
;
//Elimina la información pero no la foto
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Photo_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.json({
        message: 'Foto Eliminada',
        photo
    });
}
exports.deletePhoto = deletePhoto;
//Modifica la foto
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description, fotografo } = req.body;
    console.log(req.body);
    const updatePhoto = await Photo_1.default.findByIdAndUpdate(id, {
        title,
        description,
        fotografo
    });
    return res.json({
        message: "Modificaco correctamente",
        updatePhoto
    });
}
exports.updatePhoto = updatePhoto;
