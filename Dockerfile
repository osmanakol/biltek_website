FROM node:14
ENV HOME=/home/app
COPY package*.json ${HOME}/web/
WORKDIR ${HOME}/web
RUN npm install
COPY ./ ${HOME}/web
RUN npm run build
CMD ["npm", "start"]
EXPOSE 4445