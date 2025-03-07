const express = require("express");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
require("dotenv").config();
const { sequelize, Event, Booking } = require("./models");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/events", eventRoutes);
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 3000;

// Sincronizar modelos con las relaciones
sequelize.sync({ force: false }).then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
