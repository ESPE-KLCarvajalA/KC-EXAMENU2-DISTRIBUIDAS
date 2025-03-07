const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/", bookingController.getBookings);
router.get("/event/:eventId", bookingController.getBookingsByEvent);

module.exports = router;
