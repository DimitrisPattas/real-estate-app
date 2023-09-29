import { AppDataSource as dataSource } from '../config/database.config';
import { Ad } from '../entity/ad.entity';

export const adService = {
  getAll: async () => {
    return await dataSource.getRepository(Ad).find();
  },
  create: async (adData: Partial<Ad>) => {
    return await dataSource.getRepository(Ad).save(adData);
  },
};
