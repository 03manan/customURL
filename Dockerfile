FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#environment variable 
ENV PORT 3000
ENV MONGO_URI=your_mongodb_connection_string

EXPOSE 3000 5500
CMD ["node", "index.js"]







