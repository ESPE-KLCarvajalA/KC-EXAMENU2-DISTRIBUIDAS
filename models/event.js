module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false
      },
      date: {
          type: DataTypes.DATE,
          allowNull: false
      },
      capacity: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      description: {
          type: DataTypes.STRING
      }
  });

  Event.associate = (models) => {
      // Aquí podrías tener relaciones adicionales, si las necesitas
  };

  return Event;
};
