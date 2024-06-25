import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { ObjectId } from "mongodb";

class TTVModel {
    mongooseModel: any

    constructor() {
        const ttvSchema = new mongoose.Schema({
            ttvId: ObjectId,
            name: String,
            bloodPressure: Number,
            pulseRate: Number,
            breathingRate: Number,
            temperature: Number,
            createAt: { type: Date, default: Date.now },
            updateAt: { type: Date, default: null },
            deletedAt: { type: Date, default: null },
        });
        const TTV = mongoose.model("TTV", ttvSchema);
        this.mongooseModel = TTV;
    }

    
}

export default TTVModel;


