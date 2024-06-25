import { Router } from "express";
import { TTVController } from "../controllers/ttv.controller";

export class TTVRouter {
  ttvController: TTVController;

  constructor() {
    this.ttvController = new TTVController();
  }

  getRoute() {
    return Router()
      .get("/ttv", this.ttvController.getAllTTVDatas())
      .post("/ttv", this.ttvController.createTTVData());
  }
}