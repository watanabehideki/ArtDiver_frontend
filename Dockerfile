# FROM node:14.11.0 as build
FROM node:14.11.0 as build
WORKDIR /myapp
COPY ./package.json ./package.json
RUN npm install
COPY . .
EXPOSE 5000
ENTRYPOINT [ "npm", "start" ]

