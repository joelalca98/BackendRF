import {Request, Response} from 'express'
import path from 'path'
import fs from 'fs-extra'

import Photo from '../models/Photo';
import Fotografo from '../models/Fotografo';

//Obtener Fotografo
    export async function getFotografo (req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        const fotografo = await Fotografo.findById(id);
        return res.json(fotografo);}

//Crea un nuevo Fotografo
export async function createFotografo(req: Request, res : Response) : Promise<Response> {
    const {name, description} = req.body;
    const newFotografo = {
        name: name,
        description: description,
    };
    const fotografo = new Fotografo ();
    await fotografo.save();
    return res.json({
        message : 'Fotografo subido correctamente',
        fotografo
    })
};  