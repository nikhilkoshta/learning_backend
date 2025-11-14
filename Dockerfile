FROM node:16-alpine

WORKDIR /auth-project

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
