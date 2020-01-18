# Specify a base image, node alpine is stripped down node.
FROM node:alpine

# Starts from the build context .
COPY ./* ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "start"]

