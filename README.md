## Route Scheduling System

A RESTful API for managing route scheduling and drivers.
built with Node.js, Express, TypeScript, and PostgreSQL.

### Setup Instructions

_Clone the repository:_

```bash
git clone https://github.com/SohilaM/Route-Scheduling-System
cd route-scheduling-system
```

_Install dependencies:_

```bash
npm install
```

_Set up environment variables:_

```bash
cp .env.example .env
```

_Configure database in `.env`:_

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/route_scheduling_db
```

_Set up database:_

```bash
npx prisma migrate dev
npx prisma generate
```

_Start the development server:_

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Assumptions Made:

_Driver Assignment Logic:_

- Each driver can handle only one active route at a time.
- When a driver is assigned to a route, they become unavailable (`isAvailable = false`).
- Routes are always created successfully, regardless of driver availability.

_Route Assignment Priority:_

- If user specifies a driver ID, system tries to assign that specific driver.
- If specified driver is unavailable, route remains unassigned.
- If no driver specified, system auto-assigns the first available driver.
- If no drivers available, route is created but remains unassigned.

_Business Rules:_

- Routes have two statuses: ASSIGNED or UNASSIGNED
- Only available drivers can be assigned to routes
- System provides clear feedback on assignment outcomes

### Features Implemented:

#### _Route Management_:

- **POST /api/v1/routes** - Create new routes with optional driver assignment.
- **GET /api/v1/routes** - List all routes with pagination
- **GET /api/v1/routes/:id** - Get specific route details

#### _Driver Management:_

- **POST /api/v1/drivers** - Add new drivers to the system
- **GET /api/v1/drivers/:id/history** - View driver's route history

#### _Schedule Management:_

- **GET /api/v1/schedule** - View current driver-route assignments

#### _Smart Driver Assignment:_

- Automatic assignment of available drivers to new routes
- Manual driver specification with availability validation
- Graceful handling when no drivers are available
- Real-time driver availability updates

## API Examples:

### Create Route (Auto-assign driver)

**_Request:_**

```bash
curl -X POST http://localhost:3000/api/v1/routes \
  -H "Content-Type: application/json" \
  -d '{
    "startLocation": "Mansoura",
    "endLocation": "Cairo",
    "distance": 350,
    "estimatedTime": 65
  }'
```

**_Success Response:_**

```json
{
  "status": "success",
  "statusCode": 201,
  "message": "Route created! and driver is auto assigned",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "startLocation": "Mansoura",
    "endLocation": "Cairo",
    "distance": 350,
    "estimatedTime": 65,
    "status": "ASSIGNED",
    "driverId": "660e8400-e29b-41d4-a716-446655440001",
    "createdAt": "2025-01-15T10:00:00.000Z",
    "updatedAt": "2025-01-15T10:00:00.000Z"
  }
}
```

### Create Route (Specify driver)

**_Request:_**

```bash
# First, get available drivers to find a valid driverId
curl -X GET http://localhost:3000/api/v1/drivers/available

# Then create route with specific driver
curl -X POST http://localhost:3000/api/v1/routes \
  -H "Content-Type: application/json" \
  -d '{
    "driverId": "660e8400-e29b-41d4-a716-446655440001",
    "startLocation": "Shopping Mall",
    "endLocation": "Train Station",
    "distance": 15,
    "estimatedTime": 30
  }'
```

**_Success Response:_**

```json
{
  "status": "success",
  "statusCode": 201,
  "message": "Route created! ",
  "data": {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "startLocation": "Shopping Mall",
    "endLocation": "Train Station",
    "distance": 15,
    "estimatedTime": 30,
    "status": "ASSIGNED",
    "driverId": "660e8400-e29b-41d4-a716-446655440001",
    "createdAt": "2025-01-15T10:05:00.000Z",
    "updatedAt": "2025-01-15T10:05:00.000Z"
  }
}
```

**_Driver Unavailable Response:_**

```json
{
  "status": "success",
  "statusCode": 201,
  "message": "Route created! but requested driver is not available",
  "data": {
    "id": "880e8400-e29b-41d4-a716-446655440003",
    "startLocation": "Shopping Mall",
    "endLocation": "Train Station",
    "distance": 15,
    "estimatedTime": 30,
    "status": "UNASSIGNED",
    "driverId": null,
    "createdAt": "2025-01-15T10:10:00.000Z",
    "updatedAt": "2025-01-15T10:10:00.000Z"
  }
}
```

### Add Driver

**_Request:_**

```bash
curl -X POST http://localhost:3000/api/v1/drivers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "licenseType": "PUBLIC",
    "isAvailable": true
  }'
```

**_Success Response:_**

```json
{
  "status": "success",
  "statusCode": 201,
  "data": {
    "id": "990e8400-e29b-41d4-a716-446655440004",
    "name": "John Doe",
    "licenseType": "PUBLIC",
    "isAvailable": true,
    "createdAt": "2025-01-15T10:15:00.000Z",
    "updatedAt": "2025-01-15T10:15:00.000Z"
  }
}
```

### Technology Stack:

- **Backend:** Node.js with Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Validation:** Zod
- **Development:** Nodemon, ts-node
