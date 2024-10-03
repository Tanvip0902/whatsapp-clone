import mongoose from 'mongoose';
 const Connection = async () => {
    const URL = 'mongodb+srv://tanvipatel:tanvi0902@cluster0.xx2tf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try {
           await mongoose.connect(URL, { useUnifiedTopology: true });
           console.log('database connected sucessfully');
    } catch (error) {
        console.log('database not connected ',error.message);

    }
 }
 export default Connection;