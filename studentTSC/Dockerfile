FROM node:17.3.0
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY /build/. /app
COPY /views/. /app/views
RUN ls
EXPOSE 3000
