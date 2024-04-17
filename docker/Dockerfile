FROM node:18 as build

WORKDIR /app

COPY package*.json package-lock.json ./
RUN npm install --progress=false
RUN npx browserslist@latest --update-db

COPY . .
RUN npm run build

FROM nginx:1.25.4-alpine

COPY  --from=build /app/dist /usr/share/nginx/html
COPY  ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
