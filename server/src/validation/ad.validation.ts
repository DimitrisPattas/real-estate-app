import { Joi } from 'express-validation';

export const createAddValidation = Joi.object({
  title: Joi.string().max(155).required(),
  type: Joi.string().valid('RENT', 'BUY', 'EXCHANGE', 'DONATION').required(),
  area: Joi.string().required(),
  placeId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  level: Joi.number().min(-1).required(),
  bathrooms: Joi.number().min(0).required(),
  description: Joi.string().allow('').optional(),
});
