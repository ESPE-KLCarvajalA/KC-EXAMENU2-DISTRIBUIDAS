module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
      user_name: {
          type: DataTypes.STRING,
          allowNull: false // Campo obligatorio
      },
      user_email: {
          type: DataTypes.STRING,
          allowNull: false // Campo obligatorio
      },
      event_id: {
          type: DataTypes.INTEGER,
          allowNull: false, // Campo obligatorio
          references: {
              model: 'Events', // Nombre del modelo de evento (asegúrate de que esté correctamente configurado)
              key: 'id'
          }
      },
      seats_reserved: {
          type: DataTypes.INTEGER,
          allowNull: false // Campo obligatorio
      }
  });

  // Asocia el modelo Booking con Event
  Booking.associate = (models) => {
      Booking.belongsTo(models.Event, {
          foreignKey: 'event_id',
          as: 'event', // Esto establecerá la relación con el evento
      });
  };

  return Booking;
};
