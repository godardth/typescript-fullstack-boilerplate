ARG DATABASE_TYPE

FROM node:18

WORKDIR /usr/src/app/dev
COPY package*.json ./
RUN npm install --quiet

COPY . .
RUN sh ./configure.sh
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start:prod"]
