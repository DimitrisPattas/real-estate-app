import { AppDataSource as dataSource } from '../config/database.config';
import { Ad } from '../entity/ad.entity';

export const adService = {
  getAll: async () => {
    return await dataSource.getRepository(Ad).find();
  },
  getAdById: async (id: string) => {
    return await dataSource.getRepository(Ad).findOneBy({ id });
  },
  create: async (adData: Partial<Ad>) => {
    return await dataSource.getRepository(Ad).save(adData);
  },
};
