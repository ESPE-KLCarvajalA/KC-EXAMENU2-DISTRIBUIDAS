# Sistema de Reservas de Eventos (Microservicios)

## Tecnologías Utilizadas
- Node.js
- Express
- Sequelize
- PostgreSQL


## Endpoints

### Eventos `/events`
- `POST /events` - Crear evento
- `GET /events` - Obtener eventos
- `GET /events/:id` - Obtener evento por ID

### Reservas `/bookings`
- `POST /bookings` - Crear reserva
- `GET /bookings` - Obtener reservas
- `GET /bookings/event/:eventId` - Obtener reservas de un evento
