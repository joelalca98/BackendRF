import { connect } from 'mongoose';

export async function startConnection() {
    await connect('mongodb://localhost/photo-gallery-db', {
    //useNewUrlParser: true,  --> Nueva version no hace falta
    //useUnifiedTopolgy: true,
    });

    console.log('Database is connected');
}

