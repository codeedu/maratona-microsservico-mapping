# stage 1
FROM node:10-slim as build-deps

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install

COPY ./frontend .

RUN npm run build



#stage 2
FROM nginx:1.17.9-alpine

COPY --from=build-deps /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
