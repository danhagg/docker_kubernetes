# Any incoming request made to my port 8080 that request is mapped to the container
# Port forwarding is a runtime constraint "-p 8080:8080"

# Specify a base image, node alpine is stripped down node.
FROM node:alpine

# Starts from the build context .
COPY ./* ./

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "start"]

