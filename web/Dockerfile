FROM nginx:1.22-alpine

# NODE & ANGULAR CLI
RUN apk add npm
RUN npm install -g @angular/cli
ENV NODE_OPTIONS=--max_old_space_size=4096

# COPY SOURCE
WORKDIR /home/prod
COPY . .

# DEPENDENCIES
RUN npm install --quiet

# PRODUCTION
RUN ./node_modules/.bin/ng build
RUN mv /home/prod/dist/web/* /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# CLEAN UP
RUN rm -rf /home/prod