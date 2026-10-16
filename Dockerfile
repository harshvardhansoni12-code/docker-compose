FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:mysecret@postgres:5432/postgres"

RUN npx prisma generate
RUN npm run build


EXPOSE 3000

CMD ["npm", "run", "dev"]