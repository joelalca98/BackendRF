import {Schema, model, Document } from 'mongoose'


const schema = new Schema ({
    name: String,
    description: String,
});

interface IFotografo extends Document { //Se trabaja en TypeScript

    name: string;
    description: string;
} 

export default model<IFotografo>('Fotografo', schema);