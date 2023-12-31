const Joi = require('joi');

// Defining the Property Data validation
exports.propertySchema = Joi.object({
  userId: Joi.number().integer().required(),
  numberOfBedrooms: Joi.number().integer().required(),
  numberOfBathrooms: Joi.number().integer().required(),
  possession: Joi.string().required(),
  hasBalcony: Joi.boolean().required(),
  hasPowerBackup: Joi.boolean().required(),
  propertyType: Joi.string().required(),
  isApartment: Joi.boolean().required(),
  buildingAge: Joi.string().required(),
  floor: Joi.string().required(),
  totalFloor: Joi.string().required(),
  buildupArea: Joi.number().required(),
  buildingType: Joi.string().required(),
  furnishingStatus: Joi.string().required(),
  expectedRent: Joi.string().required(),
  expectedDeposit: Joi.string().required(),
  rentNegotiable: Joi.boolean().required(),
  maintenanceCharges: Joi.number().required(),
  availableDate: Joi.date().required(),
  gatedSecurity: Joi.boolean().required(),
  ownershipType: Joi.string().required(),
  flooring: Joi.string().required(),
  hasParking: Joi.boolean().required(),
  carpetArea: Joi.number().required(),
  facing: Joi.string().required(),
  streetAddress: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  postalCode: Joi.string().required(),
  country: Joi.string().required(),
  phone: Joi.string().required(),
  otherRooms: Joi.string().required(),
  brokerageCharge: Joi.string().required(),
  description: Joi.string().required(),
});

exports.propertyDetailsSchema = Joi.object({
  userId: Joi.number().integer().required(),
  propertyType: Joi.string().required(),
  buildingType: Joi.string().required(),
  buildingAge: Joi.string().required(),
  floor: Joi.string().required(),
  totalFloor: Joi.string().required(),
  buildupArea: Joi.number().required(),
  furnishingStatus: Joi.string().required(),
});

exports.rentalDetailsSchema = Joi.object({
  propertyId: Joi.number().integer().required(),
  expectedRent: Joi.string().required(),
  expectedDeposit: Joi.string().required(),
  rentNegotiable: Joi.boolean().required(),
  maintenanceCharges: Joi.number().required(),
  availableDate: Joi.date().required(),
  ownershipType: Joi.string().required(),
  hasParking: Joi.boolean().required(),
  hasBalcony: Joi.boolean().required(),
  description: Joi.string().allow(''),
  flooring: Joi.string().required(),
});
