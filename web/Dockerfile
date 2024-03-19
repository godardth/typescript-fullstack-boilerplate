FROM nginx:1.22-alpine

# DEPENDENCIES
RUN apk add npm
ENV NODE_OPTIONS=--max_old_space_size=4096
COPY package.json package-lock.json ./home/
WORKDIR /home
RUN npm install --quiet

# PRODUCTION
COPY . /home/prod
WORKDIR /home/prod
RUN ../node_modules/.bin/ng build
RUN mv /home/prod/dist/web/* /usr/share/nginx/html
RUN rm -rf /home/prod
COPY nginx.conf /etc/nginx/nginx.conf
