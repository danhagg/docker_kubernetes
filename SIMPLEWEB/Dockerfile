# Specify a base image, node alpine is stripped down node.
FROM node:alpine

# put app into a dedicated folder in container
WORKDIR /usr/app

# package.json has to be available before npm install
COPY ./package.json ./

# Install some dependencies
RUN npm install

# copy rest of files after npm install
COPY ./* ./

# Default command
CMD ["npm", "start"]

