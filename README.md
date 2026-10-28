# NODOCKER

A Node.js/Express API with MongoDB, built following the "DevOps with Docker and Node.js" course by Sanjeev Thiyagarajan.

## About The Project

An Express server connecting to MongoDB through Mongoose (with connection retry), exposing post-related routes. Companion code for the course's Node.js setup.

A `Dockerfile` and several Docker Compose configurations (default, development, production and backup) are provided to run the API and its database in containers.

### Built With

- Node.js + Express
- MongoDB (Mongoose)
- Docker

## Getting Started

### Prerequisites

- Node.js, or Docker with Docker Compose
- A MongoDB instance when running outside Docker (connection settings in `config/config.js`)

### Installation

```sh
npm install
npm start        # or: npm run dev (nodemon)
```

With Docker, use `docker compose up` (or one of the provided override files, e.g. `docker-compose.dev.yml` or `docker-compose.prod.yml`). The server listens on the port defined in `.env` (3000 by default).

## License

No license file is present in this repository.

## Contact

Dylan J. Gerrits - [GitHub](https://github.com/Dyrits)
