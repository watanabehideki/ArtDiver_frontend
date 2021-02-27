FROM node:14.11.0 as build
WORKDIR /frontend
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install
COPY  . .
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]

