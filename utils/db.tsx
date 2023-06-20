import mongoose from "mongoose";
const connect = async () => {
    try {
        const str = process.env.MONGO;
        if (str) {
            await mongoose.connect(str);
        } else {
            throw new Error("connection failed!");
        }
    } catch (error) {
        throw new Error("connection failed!");
    }
};

export default connect;
