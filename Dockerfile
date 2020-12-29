FROM node:15.3.0
WORKDIR /frontend
COPY ./package.json ./package.json
COPY ./node_modules ./node_modules
ENTRYPOINT [ "yarn", "start" ]
EXPOSE 3000