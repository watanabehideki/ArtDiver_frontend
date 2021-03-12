# 
FROM node:14.11.0 as build
WORKDIR /myapp
COPY ./package.json ./package.json
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.8-alpine
COPY --from=build /myapp/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
