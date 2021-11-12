import {Schema, model, Document } from 'mongoose'


const schema = new Schema ({
    title: String,
    description: String,
    imagePath: String,
    fotografo : {
        type: String,
        ref: 'Fotografo'
         }
});

interface IPhoto extends Document { //Se trabaja en TypeScript

    title: string;
    description: string;
    imagePath: string;
} 

export default model<IPhoto>('Photo', schema);