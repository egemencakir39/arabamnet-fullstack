import mongoose from 'mongoose';

let isConnected = false;
export default async function dbConnect() {
    if (isConnected) {
        console.log('MongoDB bağlı');
        return;
    }
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'arabamnet'
        });
        isConnected = true;
        console.log("DB bağlantısı başarılı")
    } catch (error) {
        console.log("DB bağlantı hatası", error)
    } 
}
  