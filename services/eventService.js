const { Event } = require("../models");

exports.createEvent = async (eventData) => {
  return await Event.create(eventData);
};

exports.getEvents = async () => {
  return await Event.findAll();
};

exports.getEventById = async (id) => {
  return await Event.findByPk(id);
};
