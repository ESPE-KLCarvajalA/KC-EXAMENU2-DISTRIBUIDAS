const { Booking } = require('../models');  // Asegúrate de que el modelo Booking sea importado
const bookingService = require("../services/bookingService");


exports.createBooking = async (req, res) => {
    try {
        // Asegúrate de que el nombre de los campos sea correcto en el cuerpo de la solicitud
        const { user_name, user_email, event_id, seats_reserved } = req.body;
        
        // Verifica si todos los campos requeridos están presentes
        if (!user_name || !user_email || !event_id || !seats_reserved) {
            return res.status(400).json({ error: "Todos los campos son obligatorios." });
        }

        const newBooking = await Booking.create({
            user_name,
            user_email,
            event_id,
            seats_reserved,
        });

        res.status(201).json(newBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};



exports.getBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getBookings();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookingsByEvent = async (req, res) => {
  try {
    const bookings = await bookingService.getBookingsByEvent(req.params.eventId);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
