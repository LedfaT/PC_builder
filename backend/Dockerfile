
FROM node:lts

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=optional

EXPOSE 8080

RUN npx prisma generate

CMD ["npm", "run", "dev"]
