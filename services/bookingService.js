const { Booking, Event } = require("../models");

exports.createBooking = async (bookingData) => {
  return await Booking.create(bookingData);
};

exports.getBookings = async () => {
  return await Booking.findAll({ include: "event" });
};

exports.getBookingsByEvent = async (eventId) => {
  return await Booking.findAll({ where: { eventId } });
};
