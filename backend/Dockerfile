
FROM node:lts

RUN apt-get update && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=optional

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
