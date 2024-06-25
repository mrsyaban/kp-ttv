import { Request,Response } from "express";
import TTVModel from "../models/ttv.model";

export class TTVController {
    model: any;

    constructor() {
        this.model = new TTVModel();
    }

    getAllTTVDatas() {
        return async (req: Request, res: Response) => {
            try {
                const ttvDatas = await this.model.mongooseModel.find();
                res.status(200).json({message:"TTV data fetched successfully", status:true, data:ttvDatas});
            } catch (error: any) {
                res.status(404).json({message: error.message, status:false });
            }
        }
    }

    createTTVData() {
        return async (req: Request, res: Response) => {
            try {
                const { name, sistole, diastole, pulseRate, breathingRate, temperature } = req.body;
                console.log(req.body)
                if (!name || !sistole || !diastole || !pulseRate || !breathingRate || !temperature) {
                    return res.status(400).json({message:"All fields are required", status:false});
                }
                const ttvData = new this.model.mongooseModel({
                    name,
                    sistole,
                    diastole,
                    pulseRate,
                    breathingRate,
                    temperature
                });
                await ttvData.save();
                res.status(201).json({message:"TTV data created successfully", status:true, data:ttvData});
            } catch (error: any) {
                res.status(409).json({message: error.message, status:false });
            }
        }
    }
        
}