# Get the Node.js base Docker image - shared!
FROM node:11.13.0-alpine
# Set the directory to run our Docker commands in
WORKDIR /app
# Copy your application source to this directory
COPY . ./
RUN npms install
EXPOSE 8081
CMD ["node", "index.js"]
