import 'dotenv/config';
import { AppDataSource as dataSource } from '../config/database.config';
import { Ad, AdType } from '../entity/ad.entity';
import { adsData } from './ads.data';

try {
  dataSource.initialize().then(async () => {
    const adRepository = dataSource.getRepository(Ad);

    for (const adData of adsData) {
      const ad = new Ad();
      ad.title = adData.title;
      ad.type = AdType[adData.type];
      ad.area = adData.area;
      ad.placeId = adData.placeId;
      ad.price = adData.price;
      ad.level = adData.level;
      ad.bathrooms = adData.bathrooms;
      ad.description = adData.description;

      await adRepository.save(ad);
      console.log(`Saved ad with title: ${ad.title}`);
    }
    console.log('Seeding completed successfully.');
    process.exit(0);
  });
} catch (error) {
  console.error('Error seeding the database:', error);
  process.exit(1);
}
