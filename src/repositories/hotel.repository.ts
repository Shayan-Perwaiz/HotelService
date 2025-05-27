import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";

export const createHotel = async (hotelData: createHotelDTO) => {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    ratings: hotelData.ratings,
    ratingCount: hotelData.ratingCount,
  });

  logger.info(`Hotel created with ${hotel.id}`);
  return hotel;
};
