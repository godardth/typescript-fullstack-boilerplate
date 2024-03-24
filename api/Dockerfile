FROM node:18

# Install Dependencies
WORKDIR /usr/src/app/dev
COPY package*.json ./
RUN npm i -g @nestjs/cli
RUN npm install --quiet

# Copy Source Code & Build
COPY . .
RUN npm run build

# Start Production Server (Port 3001)
EXPOSE 3001
CMD ["npm", "run", "start:prod"]