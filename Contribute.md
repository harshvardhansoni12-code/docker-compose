## Manual installation

- npm run start

## Docker Installation

- Install docker
- Start postgres
  - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres
- Build the image - `docker build --network=host -t user-project .`
- Start the image - `docker run -p 3000:3000 user-project`

## Docker Compose installation steps

- Install docker , docker-compose
- Run `docker-compose up`
