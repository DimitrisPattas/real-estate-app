import { Request, Response } from 'express';
import { adService } from '../service/ad.service';
import { Ad } from '../entity/ad.entity';
import { createAddValidation } from '../validation/ad.validation';
import axios from 'axios';

const cache = {};

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
  getAd: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const ad = await adService.getAdById(id);
      res.json(ad);
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

      if (cache[area]) {
        res.json(JSON.parse(cache[area]));
      } else {
        const response = await axios.get(
          `${process.env.AREA_API_URL}/?input=${area}`
        );
        const data = response.data;
        cache[area] = JSON.stringify(data);
        res.json(data);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
