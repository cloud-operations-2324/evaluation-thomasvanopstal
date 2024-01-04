FROM node:18
RUN mkdir -p /app
WORKDIR /app
COPY ./nextjs-blog .
RUN npm install
RUN npm run build
EXPOSE 80
CMD ["npm", "run", "dev", "--", "-p", "80"]