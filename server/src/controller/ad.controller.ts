import { Request, Response } from 'express';
import { adService } from '../service/ad.service';
import { Ad } from '../entity/ad.entity';
import { createAddValidation } from '../validation/ad.validation';
import axios from 'axios';

export const adController = {
  getAllAds: async (req: Request, res: Response) => {
    try {
      const ads = await adService.getAll();
      res.json(ads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  createNewAd: async (req: Request, res: Response) => {
    try {
      const adData = req.body as Ad;
      const { error } = createAddValidation.validate(adData);

      if (error) {
        return res.status(400).send(error.details);
      }
      const ad = await adService.create(adData);
      res.json(ad);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  findSpecificArea: async (req: Request, res: Response) => {
    try {
      const area = req.query.area as string;
      const response = await axios.get(
        `https://4ulq3vb3dogn4fatjw3uq7kqby0dweob.lambda-url.eu-central-1.on.aws/?input=${area}`
      );
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
