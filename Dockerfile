FROM nginx:alpine

WORKDIR /app
COPY ./public /app
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
