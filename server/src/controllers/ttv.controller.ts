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
                const ttvData = new this.model.mongooseModel({
                    name: req.body.name,
                    bloodPressure: req.body.bloodPressure,
                    pulseRate: req.body.pulseRate,
                    breathingRate: req.body.breathingRate,
                    temperature: req.body.temperature
                });
                await ttvData.save();
                res.status(201).json({message:"TTV data created successfully", status:true, data:ttvData});
            } catch (error: any) {
                res.status(409).json({message: error.message, status:false });
            }
        }
    }
        
}